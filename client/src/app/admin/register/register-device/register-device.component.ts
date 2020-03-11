import { Component, OnInit } from '@angular/core';
import { FetchData } from 'src/app/shared/services/fetch-data';
import { LayoutServiceService } from 'src/app/layout-service.service';

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.css']
})
export class RegisterDeviceComponent implements OnInit {

  constructor(private fetchData: FetchData, private layoutService: LayoutServiceService) { }
  devices: any;
  deviceId: string;
  boards: any = [];
  message: any = null;

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/admin']);
    this.layoutService.title.next('Device Management');
    this.layoutService.toolbar.next(null);
    this.getDevices();
  }
  getDevices() {
    this.fetchData.adminDevices().subscribe(res => {
      this.devices = res;
    });
  }
  register() {
    this.message = null;
    if (this.deviceId) {
      this.fetchData.postDevice({deviceId: this.deviceId, boards: this.boards}).subscribe(res => {
        console.log(res);
        this.deviceId = null;
        this.message = `device added succesfully - ` + res.deviceId;
        this.getDevices();

      }, e => {
        this.message = (e && e.error && e.error.error && e.error.error.message) ? e.error.error.message : 'error while adding device';
      });
    }
  }

  deregister(device) {
    let payload = {...device};
    payload.userId = null;
    this.fetchData.patchAdminDevices(`?id=${payload.id}`, payload).subscribe(res => {
      this.getDevices();
    });
  }

  delete(id) {
    this.fetchData.deleteAdminDevices(id).subscribe(r=>{
      this.getDevices();
    })
  }
}
