import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { AddLocationComponent } from '../add-location/add-location.component';
import { ConnectSocket } from '../sockets/connect';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { LayoutServiceService } from '../layout-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-switch',
  templateUrl: '../add-location/add-location.component.html',
  styleUrls: ['../add-location/add-location.component.css']
})
export class AddSwitchComponent extends AddLocationComponent implements OnInit, OnDestroy, AfterViewInit {
addSwitch = true;
@Input() location: any;
constructor(public activeModal: NgbActiveModal, public connect: ConnectSocket,
  public socket: Socket, public router: Router, public layoutService: LayoutServiceService) {
  super(connect, socket, router, layoutService);
}
ngAfterViewInit() {
  this.socket.on('switchesAdded', (res) => {
    if (!res.error) {
/*       if (res.name && res.deviceId) {
        this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
      }
      if (!this.activeRequests.length && res.location) {
        this.adding = false;
        this.connect.getLocations();
        this.activeModal.dismiss();
      } */
      this.adding = false;
      this.connect.getLocations();
      this.activeModal.dismiss();
    } else {
      this.adding = false;
      this.activeRequests = [];
      alert(res.error);
    }
  });
}
addSwitches() {
  if (this.location) {
    this.name = this.location.name;
    this.adding = true;
    this.activeRequests = Object.keys(this.selectedSwitches) || [];
    this.socket.emit('addSwitches', {name: this.name, devices: this.selectedSwitches, location: this.location}, res => {
      if (!res || res.error) {
        this.adding = false;
        alert(res.error);
      }
    });
  }
}




}
