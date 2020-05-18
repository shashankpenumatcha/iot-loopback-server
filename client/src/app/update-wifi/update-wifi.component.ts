import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { FetchData } from '../shared/services/fetch-data';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-update-wifi',
  templateUrl: './update-wifi.component.html',
  styleUrls: ['./update-wifi.component.css']
})
export class UpdateWifiComponent implements OnInit, OnDestroy {
  device: string = null;
  sub = new Subscription();
  devices: any;
  name:any;
  password:any;
  networks:any =[];
  showList = false;
  msg = null;
  constructor(private socket: Socket,private layoutService: LayoutServiceService, private connect: ConnectSocket, private fetchData: FetchData) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.title.next('Update Wifi');
    this.layoutService.back.next(['/settings']);
    this.layoutService.toolbar.next(false);
    this.fetchData.registeredDevices().subscribe((res) => {
      if (res && res.devices && res.devices.length) {
        this.devices = {...res}.devices;

        this.devices.map(m => {
          this.connect.join(m.deviceId, m);
          return m;
        });
        this.sub.add(
          this.connect.onlineDevices$.subscribe(r => {
            console.log('online devices', r);
            if (r) {
              this.device = Object.keys(r)[0];
            }
          })
        );
      }
    });

    this.socket.on('networks', (m) => {

      if(!m.error && m.networks){
        this.networks = m.networks;
      }
    })

  }

  scan(){
    this.showList = true;
    this.socket.emit('scan', this.device);
  }
cancel(){
this.showList = false;
}

  ngOnDestroy(){
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  submit() {
    this.connect.wifi(this.device, this.name, this.password);
    this.name = null;
    this.password = null;
    this.msg = 'Wifi details sent to device. It might take a few minutes for the new settings to take effect';
  }


}
