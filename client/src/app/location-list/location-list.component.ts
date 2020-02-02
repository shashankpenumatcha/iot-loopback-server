import { Component, OnInit, OnDestroy,Input,Output,EventEmitter} from '@angular/core';
import {FetchData} from '../shared/services/fetch-data';
import {Chowkidaar} from '../blocks/chowkidaar';
import {ConnectSocket} from '../sockets/connect';
import { Subscription, BehaviorSubject } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddLocationComponent } from '../add-location/add-location.component';
import { ThrowStmt } from '@angular/compiler';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit, OnDestroy {
  @Input() selectedSwitches: any;
  @Output() valueChange = new EventEmitter();


  selectedLocation: any;
  devices: any[];
  joinedRooms: any = {};
  locations: any = {};
  roomsCount = 0;
  onlineDevices: any = null;
  onlineDevicesLength = 0;
  subscriptions = new Subscription();
  locationsLength = 0;
  boards = [];
  selectedForSchedule = null;

  constructor(
    private fetchData: FetchData,
    private chowkidaar: Chowkidaar,
    private connect: ConnectSocket,
    private dataservice: DataService,
    config: NgbModalConfig, private modalService: NgbModal
     ) {
      config.backdrop = 'static';
      config.keyboard = false;
     }


addSchedule(s) {
  if (!this.selectedForSchedule[s.deviceId]) {
    this.selectedForSchedule[s.deviceId] = {};
  }
  if (!this.selectedForSchedule[s.deviceId][s.board]) {
    this.selectedForSchedule[s.deviceId][s.board] = {};
  }
  if (!this.selectedForSchedule[s.deviceId][s.board][s.switch]) {
    this.selectedForSchedule[s.deviceId][s.board][s.switch] = s;
  }
  this.valueChange.emit(this.selectedForSchedule);

}
removeSchedule(s) {
  if (this.selectedForSchedule[s.deviceId] && this.selectedForSchedule[s.deviceId][s.board]
     && this.selectedForSchedule[s.deviceId][s.board][s.switch]) {
      delete this.selectedForSchedule[s.deviceId][s.board][s.switch];
  }

  this.valueChange.emit(this.selectedForSchedule);


}
  ngOnInit() {
    if (this.selectedSwitches) {
      this.selectedForSchedule = this.selectedSwitches;
    }

    this.fetchData.registeredDevices().subscribe((res) => {
      if (res && res.devices && res.devices.length) {
        this.subscriptions.add(this.connect.locations$.subscribe(res => {
          this.locations = {...res};
          this.locationsLength = Object.keys(this.locations).length;
          if (!this.selectedLocation && this.locations &&  Object.keys(this.locations)[0]) {
            this.selectedLocation = Object.keys(res)[0];
          }

        }));
        this.subscriptions.add(this.connect.roomsMap.subscribe((roomsMap) => {
          if (roomsMap) {
            console.log(roomsMap);
            this.joinedRooms = {...roomsMap};
            this.roomsCount = Object.keys(roomsMap).length;
          }
        }));

        this.subscriptions.add(this.connect.onlineDevices$.subscribe((response) => {
          if (response) {
            this.onlineDevices = {...response};
            this.onlineDevicesLength = Object.keys(this.onlineDevices).length;

          } else {
            this.onlineDevices = null;
            this.onlineDevicesLength = 0;
          }
        }));

        this.subscriptions.add(this.connect.boards$.subscribe((response) => {
         this.boards = response;
        }));

        this.devices = {...res}.devices;

        this.devices.map(m => {
          this.connect.join(m.deviceId, m);
          return m;
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    // this.connect.leaveAll(Object.keys(this.joinedRooms));
  }

  logout() {
    this.chowkidaar.logout();
  }

  inRoom(deviceId: string) {
    if (this.roomsCount && this.joinedRooms[deviceId]) {
      return true;
    }
    return false;
  }

  toggle(device: any, value: any, board: any, swtch: any) {
    if (board && swtch != null && swtch !== undefined && device &&
      this.inRoom(device) &&
      this.onlineDevices &&
      this.onlineDevices[device] &&
      this.onlineDevices[device][board] &&
      this.onlineDevices[device][board].switches &&
      this.onlineDevices[device][board].switches[swtch] != null &&
      this.onlineDevices[device][board].switches[swtch] !== undefined) {
        this.connect.toggle(device, !value, board, swtch);
    }
  }

  launchDeviceAdder() {
    if (this.onlineDevicesLength) {
      const modalRef = this.modalService.open(AddLocationComponent);

    }
  }


}
