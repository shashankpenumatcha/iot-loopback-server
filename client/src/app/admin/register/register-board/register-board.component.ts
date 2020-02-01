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
    this.fetchData.registerBoard({ deviceId : this.device.id}).subscribe(res => {
      if (res && res.id) {
        this.message = `board added - ${res.id}`;
      }

    }, e => {
      this.message = `Error while adding board`;
    });
  }

}
