import { Component, OnInit, OnDestroy } from '@angular/core';
import {FetchData} from '../shared/services/fetch-data';
import {Chowkidaar} from '../blocks/chowkidaar';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddLocationComponent } from '../add-location/add-location.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConnectSocket, NgbModalConfig, NgbModal]
})

export class HomeComponent implements OnInit, OnDestroy {

  devices: any[];
  joinedRooms: any = {};
  locations: any = [];
  roomsCount = 0;
  boards: any = null;
  subscriptions = new Subscription();

  constructor(
    private fetchData: FetchData,
    private chowkidaar: Chowkidaar,
    private connect: ConnectSocket,
    config: NgbModalConfig, private modalService: NgbModal
     ) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit() {
    this.fetchData.registeredDevices().subscribe((res) => {
      if (res && res.devices && res.devices.length) {
        this.subscriptions.add(this.connect.roomsMap.subscribe((roomsMap) => {
          if (roomsMap) {
            console.log(roomsMap)
            this.joinedRooms = roomsMap;
            this.roomsCount = Object.keys(roomsMap).length;
          }
        }));

        this.subscriptions.add(this.connect.boards.subscribe((boards) => {
          if (boards) {
            if (!this.boards) {
              this.boards = {};
            }
            this.boards[boards.deviceId] = boards.boards;
          }
        }));

        this.devices = res.devices;

        this.devices.map(m => {
          this.connect.join(m.deviceId, m);
          return m;
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.connect.leaveAll(Object.keys(this.joinedRooms));
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
      this.boards &&
      this.boards[device] &&
      this.boards[device][board] &&
      this.boards[device][board].switches &&
      this.boards[device][board].switches[swtch] != null &&
      this.boards[device][board].switches[swtch] !== undefined) {
        this.connect.toggle(device, !value, board, swtch);
    }
  }

  launchDeviceAdder() {
    const modalRef = this.modalService.open(AddLocationComponent);
    modalRef.componentInstance.name = 'World';
  }

}
