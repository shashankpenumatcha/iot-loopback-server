import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchData } from '../shared/services/fetch-data';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  sub: Subscription;
  password: string;
  error: string;
  message: string;
  loading = false;

  constructor( private route: ActivatedRoute, private router: Router, private fetchData: FetchData, private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/login']);
    this.layoutService.title.next('Reset Password');
    this.layoutService.toolbar.next(false);

    this.sub = this.route
    .queryParams
    .subscribe(params => {
      console.log(params);
      if (params && params.access_token) {
        localStorage.setItem('token', params.access_token);

      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  reset() {
    this.loading = true;
    this.message = null;
    this.error = null;
    this.fetchData.resetPassword({newPassword: this.password}).subscribe(res => {
      this.loading = false;
      this.message = "Password changed successfully";
      this.password = null;
      localStorage.delete('token');
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
