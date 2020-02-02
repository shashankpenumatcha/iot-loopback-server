import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddScheduleComponent } from '../add-schedule/add-schedule.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class ScheduleComponent implements OnInit, OnDestroy {
  deviceLength: number  = null;
  devices: any = {};
  allDevices: any = {};
  subscriptions = new Subscription();


  constructor(private router: Router, private connect: ConnectSocket, private socket: Socket, config: NgbModalConfig, private modalService: NgbModal
  ) {
     config.backdrop = 'static';
     config.keyboard = false;
     config.size = 'lg';
    }

  ngOnInit() {
    this.subscriptions.add(
      this.connect.onlineDevices$.subscribe(res => {
        if (res) {
           this.allDevices = JSON.parse(JSON.stringify(res));
        }
        if (this.allDevices) {
          this.deviceLength = Object.keys(this.allDevices).length;
        } else {
          this.deviceLength = 0;
        }
        if (!this.deviceLength) {
          this.router.navigate(['/']);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  launch() {
    if (this.deviceLength) {
      const modalRef = this.modalService.open(AddScheduleComponent);

    }
  }

}
