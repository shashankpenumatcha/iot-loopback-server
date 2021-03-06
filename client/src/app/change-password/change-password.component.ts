import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';
import { FetchData } from '../shared/services/fetch-data';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  error: string;
  message: string;
  loading = false;

  constructor(private layoutService: LayoutServiceService, private fetchData: FetchData) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/settings']);
    this.layoutService.title.next('Change Password');
    this.layoutService.toolbar.next(false);
  }

  reset() {
    this.loading = true;
    this.message = null;
    this.error = null;
    this.fetchData.changePassword({oldPassword: this.oldPassword, newPassword: this.newPassword}).subscribe(res => {
      this.loading = false;
      this.message = "Password changed successfully";
      this.oldPassword = null;
      this.newPassword = null;

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
