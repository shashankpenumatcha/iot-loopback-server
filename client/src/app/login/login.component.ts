import { Component, OnInit } from '@angular/core';
import {FetchData} from '../shared/services/fetch-data';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(public fetchData: FetchData, public router: Router, private dataService: DataService) { }
  ngOnInit() {
  }
  login() {
    this.fetchData.login({username: this.username, password: this.password}).subscribe(
      (res) => {
        if (res.id && res.userId) {
          localStorage.setItem('token', res.id);
          this.fetchData.registeredDevices().subscribe(res => {
              console.log(res);
              if (res.devices && res.devices.length) {
                this.dataService.setDevices(res.devices);
                if (!sessionStorage.getItem('url')) {
                  this.router.navigate(['']);
                } else {
                  this.router.navigate([sessionStorage.getItem('url')]);
                }
              } else {
                this.dataService.setDevices([]);
                this.router.navigate(['carousel']);
              }
          }, err => {
            console.log(err);
          });
        }
      }, (err) => {
        console.log(err);
      });
  }
}
