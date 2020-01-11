import { Component, OnInit } from '@angular/core';
import { FetchData } from 'src/app/shared/services/fetch-data';

@Component({
  selector: 'app-register-board',
  templateUrl: './register-board.component.html',
  styleUrls: ['./register-board.component.css']
})
export class RegisterBoardComponent implements OnInit {

  deviceId: string;
  device: any;
  message: any = null;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
  }

  register() {
    this.message = null;
    if (this.device && this.device.id) {
      this.fetchData.registerBoard({ deviceId : this.device.id}).subscribe(res => {
        if (res && res.id) {
          this.message = `board added - ${res.id}`;
        }
        if ( !this.device.boards) {
          this.device.baords = [];
        }
        this.device.boards.unshift(res);
      }, e => {
        this.message = `Error while adding board`;
      });
    }
  }

  verify() {
    this.message = null;
    if (this.deviceId) {
        this.fetchData.getDeviceByDeviceId(this.deviceId).subscribe(res => {
          if (res && res.id) {
            this.deviceId = null;
            this.device = res;
          }
        }, e => {
          this.message = 'error while fetching device';
          this.device = null;
        });
    }
  }
}
