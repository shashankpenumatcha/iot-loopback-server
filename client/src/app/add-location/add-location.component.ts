import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { LayoutServiceService } from '../layout-service.service';

//TODO multiple device per location
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit, OnDestroy {
  @Input() location: any;
  deviceLength: number  = null;
  devices: any = {};
  allDevices: any = {};
  subscriptions = new Subscription();
  boards: any [] = [];
  selectedSwitches: any = {};
  assignedSwitches: any = {};
  name: string;
  adding: boolean;
  activeRequests = [];
  showSwitches = false;
  switchCount = 0;
  selectedSwitchCount = 0;
  // get available switches
  constructor( public connect: ConnectSocket, public socket: Socket, public router: Router, public layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/']);
    this.layoutService.title.next('Add Location');
    this.layoutService.toolbar.next(null);


    this.subscriptions.add(
      this.connect.onlineDevices$.subscribe(res => {
        if (res) {
           this.allDevices = {...JSON.parse(JSON.stringify(res))};
           console.log(JSON.parse(JSON.stringify(res)))
           console.log('allDevices', this.allDevices);
        }
        if (this.allDevices) {
          this.deviceLength = Object.keys(this.allDevices).length;
        } else {
          this.deviceLength = 0;
        }
        if (!this.deviceLength) {
         // this.activeModal.dismiss();
         this.router.navigate(['/']);
        }
        this.scan(true);
      })
    );
    this.socket.on('locationAdded', (res) => {
      if (!res.error) {
        if (res.name && res.deviceId) {
          this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
        }
        if (!this.activeRequests.length && res.name) {
          this.adding = false;
          this.connect.getLocations();
         // this.activeModal.dismiss();
          this.router.navigate(['/']);
        }
      } else {
        this.adding = false;
        this.activeRequests = [];
        alert(res.error);
      }
    });

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socket.removeListener('locationAdded');
    this.socket.removeListener('assignedSwitches');

  }

  scan(show) {
    if (this.allDevices && this.deviceLength) {
      const devices = Object.keys(this.allDevices);
      devices.map( d => {
        this.socket.emit('getAssignedSwitches', d);
        return d;
      });
      this.activeRequests = devices;
      //this.adding = true;
      this.socket.on('assignedSwitches', res => {
        if (res && res.deviceId) {
          this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
          if (res.switches && res.switches.length) {
            res.switches.some(s => {
              console.log(res);
              console.log(this.allDevices);
              if (this.allDevices[res.deviceId] && this.allDevices[res.deviceId][s.board]
                && this.allDevices[res.deviceId][s.board].switches
                // tslint:disable-next-line: radix
                && (this.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === true ||
                 this.allDevices[res.deviceId][s.board].switches[parseInt(s.switch)] === false)) {
                // tslint:disable-next-line: radix
                this.allDevices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 1);
                this.allDevices[res.deviceId][s.board].switches.splice(parseInt(s.switch), 0, null);

              }
            });
          }
        }
        if (!this.activeRequests.length) {
         // this.adding = false;
          if (show) {
            this.showSwitches = true;
          }
          this.socket.removeListener('assignedSwitches');
        }
        this.devices = this.allDevices;
        const dk = Object.keys(this.devices);
        dk.map((d, ix) => {
          const bk = Object.keys(this.devices[d]);
          bk.map((b, ixx) => {
            this.setSwitchCount(ix, ixx, this.devices[d][b]);
            return b;
          });
          return d;
        });
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
      this.selectedSwitchCount += 1;
    }
  }

  deselect(device, board, swtch) {
      if (this.selectedSwitches[device] && this.selectedSwitches[device][board] && this.selectedSwitches[device][board][swtch]) {
        delete this.selectedSwitches[device][board][swtch];
        if (!Object.keys(this.selectedSwitches[device][board]).length) {
          delete this.selectedSwitches[device][board];
          if (!Object.keys(this.selectedSwitches[device]).length) {
            delete this.selectedSwitches[device];
            this.selectedSwitchCount -= 1;
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

  setSwitchCount(ix, ixx, board) {
      if (ix === 0 && ixx === 0) {
        this.switchCount = 0;
      }
      if (board && board.switches) {
        this.switchCount += board.switches.filter(f => f != null).length;
      }

    }

}
