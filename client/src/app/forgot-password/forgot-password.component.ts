import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';
import { FetchData } from '../shared/services/fetch-data';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  error: string;
  message: string;
  loading = false;

  constructor(private layoutService: LayoutServiceService, private fetchData: FetchData) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/login']);
    this.layoutService.title.next('Forgot Password');
    this.layoutService.toolbar.next(false);
  }

  reset() {
    this.loading = true;
    this.message = null;
    this.error = null;
    this.fetchData.forgotPassword({email: this.email}).subscribe(res => {
      this.loading = false;
      this.message = "Reset link sent to " + this.email;
      this.email = null;
    }, err => {
      this.loading = false;
      if (err && err.error && err.error.message) {
        this.message = err.error.message;
      } else {
        this.error = "Please try again";
      }
    });

  }

}
