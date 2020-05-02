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
  showIcons: any = null;
  iconType: any = null;
  addSwitches = false;
  switchForIcon: any = [];
  constructor(private connect: ConnectSocket, private socket: Socket, private layoutService: LayoutServiceService,
    private data: Data, private router: Router, config: NgbModalConfig, private modalService: NgbModal
    ) {
     config.backdrop = 'static';
     config.keyboard = false;
    }



  saveLocationLogo(e) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.error = null;
    const l: any = {...this.location};
    l.locationLogo = e;
    this.socket.emit('editLocationLogo', {location: l}, res => {
     /*  console.log(res);
      this.location.locationLogo = res.locationLogo; */
      this.loading = false;
      if (!res || res.error) {
        this.error = res.error;
      }
    });
  }


  saveSwitchLogo(e) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.error = null;
    const s: any = {...this.switchForIcon[0]};
    s.switchLogo = e;
    this.socket.emit('editSwitchLogo', {switch: s}, res => {
     /*  console.log(res);
      this.location.locationLogo = res.locationLogo; */
      this.loading = false;
      if (!res || res.error) {
        this.error = res.error;
      }
    });
  }

  openSwitchIcon(s) {
    this.iconType = 'switch';
    this.showIcons = true;
    this.layoutService.header.next(true);
    this.layoutService.back.next(null);
    this.layoutService.title.next('Select Icon');
    this.layoutService.toolbar.next(null);

    this.switchForIcon.push(s);

  }
  openLocationIcon() {
    this.iconType = 'location';
    this.showIcons = true;
    this.layoutService.header.next(true);
    this.layoutService.back.next(null);
    this.layoutService.title.next('Select Icon');
    this.layoutService.toolbar.next(null);
  }
  onIconSelect(e) {
    if (this.iconType === 'location') {
     this.saveLocationLogo(e);
    }
    if (this.iconType === 'switch') {
      this.saveSwitchLogo(e);
    }
    this.iconType = null;
    this.showIcons = false;
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/']);
    this.layoutService.title.next('Edit Location');
    this.layoutService.toolbar.next(null);
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

    this.socket.on('editedLocationLogo', (res) => {
      if (!res.error) {
        if (res.locationLogo !== undefined) {
          this.loading = false;
          this.location.locationLogo = res.locationLogo;

        }
      } else {
        this.error = res.error;
        this.loading = false;
      }
    });

    this.socket.on('editedSwitchLogo', (res) => {
      console.log(res)
      if (!res.error) {
        if (res.switchLogo !== undefined) {
          this.loading = false;
          this.switchForIcon[0].switchLogo = res.switchLogo;
          this.switchForIcon = [];
        }
      } else {
        this.error = res.error;
        this.loading = false;
      }
    });
  }

  saveName() {
    if (!this.location.name || this.loading) {
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

  toggle(swtch, value, e) {
    if (e.target.className.indexOf('stop') === -1) {

      this.connect.toggle(swtch.deviceId, !value, swtch.board, swtch.switch);
    }
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
/*     const modal = this.modalService.open(AddSwitchComponent);
    modal.componentInstance.location = this.location; */
    this.addSwitches = true;
    this.layoutService.header.next(true);
    this.layoutService.back.next(null);
    this.layoutService.title.next('Add Switches');
    this.layoutService.toolbar.next(null);
  }
  switchAdded(e) {
    if (e) {
      this.addSwitches = false;
      this.layoutService.header.next(true);
      this.layoutService.back.next(['/']);
      this.layoutService.title.next('Edit Location');
      this.layoutService.toolbar.next(null);
    }
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



}
