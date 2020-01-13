import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable()
export class ConnectSocket {

  rooms: any = {};
  onlineDevices: any = null;
  locations: any = null;
  roomsMap = new BehaviorSubject<any>(null);
  onlineDevices$ = new BehaviorSubject(this.onlineDevices);
  locations$ = new BehaviorSubject(this.locations);
  constructor(private socket: Socket) {
    this.getSwitches();
    this.onDeviceDisconnect();
    this.initLocations();
  }

  initLocations() {
    this.socket.on('locations', res => {
      console.log(res);
      if (!res.error) {
        if (res.deviceId && res.switches && res.switches.length) {
          if (!this.locations) {
            this.locations = {};
          }
          res.switches.some(s => {
              if (!this.locations[s.locationId]) {
                this.locations[s.locationId] = {};
              }
              this.locations[s.locationId].name = s.locationName;
              if (!this.locations[s.locationId].devices) {
                this.locations[s.locationId].devices = {};
              }
              if (!this.locations[s.locationId].devices[res.deviceId]) {
                this.locations[s.locationId].devices[res.deviceId] = {};
              }
              if (! this.locations[s.locationId].devices[res.deviceId][s.board]) {
                this.locations[s.locationId].devices[res.deviceId][s.board] = {};
              }

              if (!this.locations[s.locationId].devices[res.deviceId][s.board][s.switch]) {
                this.locations[s.locationId].devices[res.deviceId][s.board][s.switch] = {};
              }
              this.locations[s.locationId].devices[res.deviceId][s.board][s.switch].name = s.name;
          });
          this.locations$.next(this.locations);
        }
      }
    });
  }

  getLocations() {
    let devices = [];
    if (this.onlineDevices) {
      devices = Object.keys(this.onlineDevices);
    }
    if (devices.length) {
      this.socket.emit('getLocations', devices);
    } else {
      this.locations = null;
      this.locations$.next(null);
    }
  }

  onDeviceDisconnect() {
    this.socket.on('deviceDisconnected', id => {
      if (id) {
        if (this.onlineDevices && this.onlineDevices[id]) {
          delete this.onlineDevices[id];
          if (Object.keys(this.onlineDevices).length) {
            this.onlineDevices = null;
          }
          this.getLocations();
          this.onlineDevices$.next(this.onlineDevices);
        }
      }
    });
  }

  join(msg: string, device: any) {
      this.joined(device);
      this.socket.emit('join', msg);
  }

  joined(device) {
    return this.socket.fromEvent('joined').subscribe(m => {
      if (m != null && typeof(m) === 'string') {
          this.rooms[m] = device;
          this.roomsMap.next(this.rooms);
          this.socket.emit('getBoards', m);
      }
    });
  }

  leaveAll(ids: string[]) {
    if (ids && ids.length) {
      ids.map(id => {
        this.socket.emit('leave', id);
        return id;
      });
    }
  }

  getSwitches() {
    this.socket.on('boards', response => {
      if (this.rooms && response && response.deviceId && response.boards) {
        if (!this.onlineDevices) {
          this.onlineDevices = {};
        }
        this.onlineDevices[response.deviceId] = response.boards;
        this.getLocations();
        this.onlineDevices$.next(this.onlineDevices);
      }
    });
  }

  toggle(device: string, value: boolean, board: string, swtch: number){
    const msg = {d: device, v: value, b: board, s: swtch};
    this.socket.emit('toggle', msg);
  }

}
