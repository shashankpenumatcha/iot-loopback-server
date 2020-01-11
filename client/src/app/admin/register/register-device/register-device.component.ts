import { Component, OnInit } from '@angular/core';
import { FetchData } from 'src/app/shared/services/fetch-data';

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.css']
})
export class RegisterDeviceComponent implements OnInit {

  constructor(private fetchData: FetchData) { }

  deviceId: string;
  boards: any = [];
  message: any = null;

  ngOnInit() {
  }

  register() {
    this.message = null;
    if (this.deviceId) {
      this.fetchData.postDevice({deviceId: this.deviceId, boards: this.boards}).subscribe(res => {
        console.log(res);
        this.deviceId = null;
        this.message = `device added succesfully - ` + res.deviceId;
      }, e => {
        this.message = (e && e.error && e.error.error && e.error.error.message) ? e.error.error.message : 'error while adding device';
      });
    }
  }
}
