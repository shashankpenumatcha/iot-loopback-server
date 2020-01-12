import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';

//TODO multiple device per location
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
  assignedSwitches: any = {};
  name: string;
  adding: boolean;
  activeRequests = [];
  showSwitches = false;
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
      //  / this.scan(false);
      })
    );
    this.socket.on('locationAdded', (res) => {

      if (res.name && res.deviceId) {
        this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
      }
      if (!this.activeRequests.length && res.name) {
        this.adding = false;
        alert(`new location added ${res.name}`);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socket.removeListener('locationAdded');
    this.socket.removeListener('assignedSwitches');

  }

  scan(show) {
    if (this.devices && this.deviceLength) {
      const devices = Object.keys(this.devices);
      devices.map( d => {
        this.socket.emit('getAssignedSwitches', d);
        return d;
      });
      this.activeRequests = devices;
      this.adding = true;
      this.socket.on('assignedSwitches', res => {
        if (res && res.deviceId) {
          this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
          if (res.switches && res.switches.length) {
            res.switches.some(s => {
             /*  this.assignedSwitches[s.board] = {};
              this.assignedSwitches[s.board][`${s.switch}`] = {};
              if (s.name) {
                this.assignedSwitches[s.board][`${s.switch}`].label = s.name;
              } */
              console.log(this.devices);


              if (this.devices[res.deviceId] && this.devices[res.deviceId][s.board]
                && this.devices[res.deviceId][s.board].switches
                // tslint:disable-next-line: radix
                && (this.devices[res.deviceId][s.board].switches[parseInt(s.switch)] === true ||
                 this.devices[res.deviceId][s.board].switches[parseInt(s.switch)] === false)) {
                // tslint:disable-next-line: radix
                this.devices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 1);
              }
            });
          }
        }
        if (!this.activeRequests.length) {
          this.adding = false;
          if (show) {
            this.showSwitches = true;
          }
          this.socket.removeListener('assignedSwitches');
        }
      });
    }
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
    this.activeRequests = Object.keys(this.selectedSwitches) || [];
    this.socket.emit('addLocation', {name: this.name, devices: this.selectedSwitches}, res => {
      if (!res || res.error) {
        this.adding = false;
        alert(res.error);
      }
    });
  }

}
