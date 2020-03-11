import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';
import {Data} from '../../app/data.provider';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Subscription } from 'rxjs';
import { ConnectSocket } from '../sockets/connect';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSwitchComponent } from '../add-switch/add-switch.component';
@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class EditLocationComponent implements OnInit, OnDestroy {
  locationId: any;
  location: any;
  editName = false;
  loading = false;
  error: any;
  onlineDevices: any;
  subscription = new Subscription();
  constructor(private connect: ConnectSocket, private socket: Socket, private layoutService: LayoutServiceService,
    private data: Data, private router: Router,config: NgbModalConfig, private modalService: NgbModal
    ) {
     config.backdrop = 'static';
     config.keyboard = false;
    }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    if (!this.data.storage.locationId) {
      this.router.navigate(['/']);
    }
    this.location = JSON.parse(JSON.stringify(this.data.storage.location));
    this.locationId = this.data.storage.locationId;
    this.data.storage.locationId = null;
    this.data.storage.location = null;
    this.subscription.add(this.connect.onlineDevices$.subscribe(res => {
      if (res) {
        this.onlineDevices = {...res};
      }
    }));
    this.subscription.add(this.connect.locations$.subscribe(res => {

      if (res) {
        let locations = {...res};
        const keys = Object.keys(locations);
        if (keys.length) {
          if (keys.indexOf(this.locationId) >= 0) {
            keys.map(m => {
               if (this.locationId == m) {
                this.location = locations[m];
              }
              return m;
            });
          } else {
            this.router.navigate(['/']);
          }
        } else {
            this.router.navigate(['/']);
        }
      }
    }));
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/']);
    this.layoutService.title.next('Edit Location');
    this.layoutService.toolbar.next(null);




    this.socket.on('editedSwitch', (res) => {
      if (!res.error) {
        if (res.name && res.id) {
          this.loading = false;
          if (this.location && this.location.switches) {
            /* this.location.switches = this.location.switches.map(m => {
              if (m.board == res.board && m.id == res.id) {
                  m.name = res.name;
                  m.edit = false;
              }

              return m;
            }); */
            this.connect.getLocations();
          }
        }
      } else {
        this.error = res.error;
        this.loading = false;
      }
    });

    this.socket.on('editedLocationName', (res) => {
      if (!res.error) {
        if (res.name) {
          this.loading = false;
          this.location.name = res.name;
          this.editName = false;
        }
      } else {
        this.error = res.error;
        this.loading = false;
      }
    });

    this.socket.on('deletedLocation', (res) => {
      if (!res.error) {
        if (res.id) {
          this.loading = false;
          this.router.navigate(['/']);
        }
      } else {
        this.error = res.error;
        this.loading = false;
      }
    });
    this.socket.on('deletedSwitch', (res) => {
      if (!res.error) {
        if (res.id) {
          this.loading = false;
          this.connect.getLocations();
        }
      } else {
        this.error = res.error;
        this.loading = false;
      }
    });
  }

  saveName() {
    if (!this.location.name && !this.loading) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.socket.emit('editLocationName', {location: this.location}, res => {
      console.log(res);
      this.loading = false;
      if (!res || res.error) {
        this.error = res.error;
      }
    });
  }


  deleteLocation() {
    if (confirm('delete location?')) {
      if (!this.locationId) {
        return;
      }
      this.loading = true;
      this.error = null;
      this.socket.emit('deleteLocation', {locationId: this.locationId, location: this.location}, res => {
        console.log(res);
        this.loading = false;
        if (!res || res.error) {
          this.error = res.error;
        }
      });
    }
  }

  toggle(swtch, value) {
    this.connect.toggle(swtch.deviceId, !value, swtch.board, swtch.switch);
  }

  deleteSwitch(s) {
    if (this.location.switches.length === 1) {
      if (confirm('Deleting this switch will delete location. Would you like to delete switch and location?')) {
        if (!this.locationId) {
          return;
        }
        this.loading = true;
        this.error = null;
        this.socket.emit('deleteLocation', {locationId: this.locationId, location: this.location}, res => {
          console.log(res);
          this.loading = false;
          if (!res || res.error) {
            this.error = res.error;
          }
        });
      }
    } else if (this.location.switches.length > 1) {

      if (confirm('delete switch?')) {
        if (!s.deviceId || !s.id) {
          return;
        }
        this.loading = true;
        this.error = null;
        this.socket.emit('deleteSwitch', {switch: s}, res => {
          console.log(res);
          this.loading = false;
          if (!res || res.error) {
            this.error = res.error;
          }
        });
      }
    }

  }

  addSwitch() {
    const modal = this.modalService.open(AddSwitchComponent);
    modal.componentInstance.location = this.location;

  }

  saveSwitch(sw){
    if (!sw.name || !sw.id) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.socket.emit('editSwitch', {switch: sw}, res => {
      console.log(res);
      this.loading = false;
      if (!res || res.error) {
        this.error = res.error;
      }
    });
  }

  /*

  addLocation() {
    this.adding = true;
    this.activeRequests = Object.keys(this.selectedSwitches) || [];
    this.socket.emit('addLocation', {name: this.name, devices: this.selectedSwitches}, res => {
      if (!res || res.error) {
        this.adding = false;
        alert(res.error);
      }
    });
  } */

}
