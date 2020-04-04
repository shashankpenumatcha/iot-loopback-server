import { Component, OnInit } from '@angular/core';
import { FetchData } from '../shared/services/fetch-data';
import { LayoutServiceService } from '../layout-service.service';

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
  loading = false;
  name: any;
  contact: any;
  constructor(private fetchData: FetchData, private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.title.next('Register');
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/welcome']);
    this.layoutService.toolbar.next(null);

  }

  signup() {
    this.success = false;
    this.error = null;

    const payload = {
      username: this.email,
      email: this.email,
      password: this.password,
      emailVerified: true,
      name: this.name,
      contactNumber: this.contact
    };

    this.loading = true;
    this.fetchData.signup(payload).subscribe(res => {
      this.loading = false;

      console.log(res);
      this.username = null;
      this.email = null;
      this.password = null;
      this.terms = true;
      this.success = true;
    }, err => {
      this.loading = false;

      let e = null;
      if( err.error && err.error.error) {
        e = err.error.error;
      }
      if (e && e.details && e.details.messages && Object.keys(e.details.messages)){
        let m = Object.keys(e.details.messages);
        if (m.length) {
         return this.error = m + ' ' + e.details.messages[m[0]];
        }
      }
      console.log(err)
      return this.error = 'signup failed';
     });
  }

}
