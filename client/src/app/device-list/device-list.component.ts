import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectSocket } from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBoardComponent } from '../add-board/add-board.component';
import { LayoutServiceService } from '../layout-service.service';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  devices: any;
  onlineDevicesLength: number;
  public object = Object;
  constructor(private layoutService: LayoutServiceService,private connect: ConnectSocket, private router: Router,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.layoutService.toolbar.next(null);

    this.layoutService.title.next("Home");
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/']);

    this.subscriptions.add(this.connect.onlineDevices$.subscribe(res => {
      if (res) {
        console.log(res);
        this.devices = {...res};
        this.onlineDevicesLength = Object.keys(this.devices).length;
      }
      if (!this.onlineDevicesLength) {
        this.router.navigateByUrl('/');
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  launchBoardAdder(deviceId) {
    if (deviceId) {
      const modalRef = this.modalService.open(AddBoardComponent,{backdrop: 'static', keyboard: false});
      modalRef.componentInstance.deviceId = deviceId;

    }
  }

}
