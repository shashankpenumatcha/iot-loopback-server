import { Component, OnInit } from '@angular/core';
import {FetchData} from '../shared/services/fetch-data';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  loading = false;
  constructor(public fetchData: FetchData, public router: Router, private dataService: DataService, private layoutService: LayoutServiceService) { }
  ngOnInit() {
    this.layoutService.title.next('Login');
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/welcome']);
    this.layoutService.toolbar.next(null);

  }
  login() {
    this.loading = true;
    this.error = null;
    this.fetchData.login({username: this.username, password: this.password}).subscribe(
      (res) => {

        if (res.id && res.userId) {
          localStorage.setItem('token', res.id);
          this.fetchData.account().subscribe(res=>{
              this.loading = false;
              if (!res.emailVerified) {
                this.error = "Email not verified, please check your email";
              } else {
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
                this.loading = false;

                console.log(err);
              });
              }
          }, err => {
            this.loading = false;

            this.error = "Account not found";
          });
        }
      }, (err) => {
        console.log(err);
        console.log(err.error)
        if (err && err.error && err.error    && err.error.error.message) {
          this.error = err.error.error.message;
        }
      });
  }
}
