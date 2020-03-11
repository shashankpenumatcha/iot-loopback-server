import { Injectable, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root',
})
export class ConnectSocket implements OnDestroy {

  rooms: any = {};
  onlineDevices: any = null;
  locations: any = null;
  roomsMap = new BehaviorSubject<any>(null);
  onlineDevices$ = new BehaviorSubject(this.onlineDevices);
  locations$ = new BehaviorSubject(this.locations);
  boards: any = [];
  boards$ = new BehaviorSubject(this.boards);
  usage: any = null;
  usage$ = new BehaviorSubject(this.usage);

  constructor(private socket: Socket) {
    this.getSwitches();
    this.onDeviceDisconnect();
    this.initLocations();
    this.initUsage();
  }

  ngOnDestroy() {
    this.leaveAll(Object.keys(this.rooms));
  }

  initUsage() {
    this.socket.on('usage', res => {
      console.log(res);
      if (!res.error) {
        if (res.deviceId && res.switches && res.switches.length) {
          this.usage = {};
          res.switches.some(s => {
              if (!this.usage[s.locationId]) {
                this.usage[s.locationId] = {};
              }
              this.usage[s.locationId].name = s.locationName;
              if (!this.usage[s.locationId].switches) {
                this.usage[s.locationId].switches = [];
              }
              s.deviceId = res.deviceId;
              this.usage[s.locationId].switches.push(s);

          });
          this.usage$.next(this.usage);
        }
      }
    });
  }
  initLocations() {
    this.socket.on('locations', res => {
      console.log(res);
      if (!res.error) {
        if (res.deviceId && res.switches && res.switches.length) {
          this.locations = {};
          res.switches.some(s => {
              if (!this.locations[s.locationId]) {
                this.locations[s.locationId] = {};
                this.locations[s.locationId].deviceId = res.deviceId;
                this.locations[s.locationId].locationId = s.locationId;

              }
              this.locations[s.locationId].name = s.locationName;
              if (!this.locations[s.locationId].switches) {
                this.locations[s.locationId].switches = [];
              }
              s.deviceId = res.deviceId;
              this.locations[s.locationId].switches.push(s);
             /*  if (!this.locations[s.locationId].devices) {
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
              this.locations[s.locationId].devices[res.deviceId][s.board][s.switch].name = s.name; */
          });
          this.calculateActiveLocations();
          this.locations$.next(this.locations);
        } else if (!res.switches || !res.switches.length) {
          this.locations = {};
          this.calculateActiveLocations();
          this.locations$.next(this.locations);
        }
      }
    });
  }

  calculateActiveLocations() {
    if (this.locations) {
      const locations = Object.keys(this.locations);
      if (locations.length) {
        locations.some(l => {
          this.locations[l].active = false;
          if (this.locations[l].switches) {
            this.locations[l].switches.some( s => {
              if (this.onlineDevices && this.onlineDevices[s.deviceId]
                && this.onlineDevices[s.deviceId][s.board]
                && this.onlineDevices[s.deviceId][s.board].switches
                && this.onlineDevices[s.deviceId][s.board].switches.length
                && this.onlineDevices[s.deviceId][s.board].switches[s.switch]
              ) {
                this.locations[l].active = true;
                return;
              }
            });
          }
        });
      }
    }
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

  getUsage() {
    let devices = [];
    if (this.onlineDevices) {
      devices = Object.keys(this.onlineDevices);
    }
    if (devices.length) {
      this.socket.emit('getUsage', devices);
    } else {
      this.usage = null;
      this.usage$.next(null);
    }
  }

  onDeviceDisconnect() {
    this.socket.on('deviceDisconnected', id => {
      if (id) {
        if (this.onlineDevices && this.onlineDevices[id]) {
          delete this.onlineDevices[id];
          if (!Object.keys(this.onlineDevices).length) {
            this.onlineDevices = null;
          }
          this.getLocations();
          this.onlineDevices$.next(this.onlineDevices);
        }
      }
    });
  }

  join(msg: string, device: any) {

    if (!this.rooms[msg]) {
      this.joined(device);
      this.socket.emit('join', msg);
    }
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
        this.calculateBoards();
      }
    });
  }

  calculateBoards() {
    let boards = [];
    const dk = Object.keys(this.onlineDevices);
    dk.some(d => {
      const bk = Object.keys(this.onlineDevices[d]);
      bk.some(b => {
        boards.push(this.onlineDevices[d][b]);
      });
    });
    this.boards = boards;
    this.boards$.next(this.boards);
  }

  toggle(device: string, value: boolean, board: string, swtch: number){
    const msg = {d: device, v: value, b: board, s: swtch};
    this.socket.emit('toggle', msg);
  }

  getSchedules() {

  }

}
