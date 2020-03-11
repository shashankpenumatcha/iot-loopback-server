import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { Subscription } from 'rxjs';
import { FetchData } from '../shared/services/fetch-data';
import { LayoutServiceService } from '../layout-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, OnDestroy {
  step = null;
  subscriptions = new Subscription();
  devices: any[];
  deviceId;
  error:any;
  private sub: any;
  tutorial:any;
  constructor(private route: ActivatedRoute,private router: Router, private dataService: DataService, private fetchData: FetchData, private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.tutorial = params['tutorial']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
    this.layoutService.header.next(true);
    this.layoutService.back.next(null);
    this.layoutService.title.next('Register your Device');


    this.subscriptions.add(this.dataService.devices$.subscribe(
      devices => {
        this.devices = devices;
      }
    ));
  }

  changeStep(title) {
    this.layoutService.title.next(title);

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.sub.unsubscribe();

  }

  register(deviceId) {
    this.error = null;
    if (deviceId) {
      this.fetchData.registerDevice(deviceId).subscribe(res => {
        if (res && res.devices && res.devices.length) {
          this.dataService.setDevices(res.devices);
        }
        if (this.tutorial) {
          this.step = 4;
          this.changeStep('Setup complete');
        } else {
          this.router.navigate(['/']);
        }
      },e=>{
        if(e && e.error && e.error.error && e.error.error.message) {
          this.error = e.error.error.message;
        }
      });
    }
  }

}
