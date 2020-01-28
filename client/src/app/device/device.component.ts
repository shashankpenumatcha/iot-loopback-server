import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { Subscription } from 'rxjs';
import { FetchData } from '../shared/services/fetch-data';

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

  constructor(private router: Router, private dataService: DataService, private fetchData: FetchData) { }

  ngOnInit() {
    this.subscriptions.add(this.dataService.devices$.subscribe(
      devices => {
        this.devices = devices;
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  register(deviceId) {
    if (deviceId) {
      this.fetchData.registerDevice(deviceId).subscribe(res => {
        if (res && res.devices && res.devices.length) {
          this.dataService.setDevices(res.devices);
        }
        //this.router.navigate['/'];
        //TODO navigate to on-boarding
        this.step = 4;
      });
    }
  }

}
