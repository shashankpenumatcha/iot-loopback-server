import { Component, OnInit } from '@angular/core';
import { FetchData } from '../shared/services/fetch-data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  username: string;
  password: string;
  error: string;
  terms: boolean;
  success: boolean;
  constructor(private fetchData: FetchData) { }

  ngOnInit() {
  }

  signup() {
    this.success = false;
    this.error = null;
    const payload = {
      username: this.username,
      email: this.email,
      password: this.password,
      emailVerified: false
    };

    this.fetchData.signup(payload).subscribe(res => {
      console.log(res);
      this.username = null;
      this.email = null;
      this.password = null;
      this.terms = true;
      this.success = true;
    }, err => {
      let e = null;
      if( err.error && err.error.error) {
        e = err.error.error;
      }
      if (e && e.details && e.details.messages && Object.keys(e.details.messages)){
        let m = Object.keys(e.details.messages);
        if (m.length) {
         return this.error = e.details.messages[m[0]]
        }
      }
      console.log(err)
      return this.error = 'signup failed';
     });
  }

}
