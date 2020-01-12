import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit, OnDestroy {
  deviceLength: number  = null;
  devices: any = {};
  subscriptions = new Subscription();
  boards: any [] = [];
  selectedSwitches: any = {};
  name: string;
  adding: boolean;
  // get available switches
  constructor(public activeModal: NgbActiveModal, private connect: ConnectSocket, private socket: Socket) { }

  ngOnInit() {
    this.subscriptions.add(
      this.connect.onlineDevices$.subscribe(res => {
        if (res) {
          this.devices = res;
        }
        console.log(this.devices);
        if (this.devices) {
          this.deviceLength = Object.keys(this.devices).length;
        } else {
          this.deviceLength = 0;
        }
      })
    );
    this.socket.on('locationAdded', this.locationAddedListner);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socket.removeListener('locationAdded', this.locationAddedListner);
  }

  locationAddedListner(res) {
    if (res.name) {
      alert(res.name);
    }
  }

  scan() {

  }

  select(device, board, swtch) {
    if (!this.selectedSwitches[device]) {
      this.selectedSwitches[device] = {};
    }
    if (!this.selectedSwitches[device][board]) {
      this.selectedSwitches[device][board] = {};
    }
    if (!this.selectedSwitches[device][board][swtch]) {
      this.selectedSwitches[device][board][swtch] = {};
    }
  }

  deselect(device, board, swtch) {
      if (this.selectedSwitches[device] && this.selectedSwitches[device][board] && this.selectedSwitches[device][board][swtch]) {
        delete this.selectedSwitches[device][board][swtch];
        if (!Object.keys(this.selectedSwitches[device][board]).length) {
          delete this.selectedSwitches[device][board];
          if (!Object.keys(this.selectedSwitches[device]).length) {
            delete this.selectedSwitches[device];
          }
        }
      }
  }

  toggle(device: any, value: any, board: any, swtch: any) {
    if (board && swtch != null && swtch !== undefined && device &&
      this.devices &&
      this.devices[device] &&
      this.devices[device][board] &&
      this.devices[device][board].switches &&
      this.devices[device][board].switches[swtch] != null &&
      this.devices[device][board].switches[swtch] !== undefined) {
        this.connect.toggle(device, !value, board, swtch);
    }
  }

  addLocation() {
    this.adding = true;
    this.socket.emit('addLocation', {name: this.name, devices: this.selectedSwitches}, res => {
      this.adding = false;
      if (res && res.name) {
        alert('room created' + res.name);
      }
      if (!res || res.error) {
        alert(res.error);
      }
    });
  }

}
