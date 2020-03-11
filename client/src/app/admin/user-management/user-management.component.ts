import { Component, OnInit } from '@angular/core';
import { FetchData } from 'src/app/shared/services/fetch-data';
import { LayoutServiceService } from 'src/app/layout-service.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  message: any = null;
  users:any;
  constructor(private fetchData: FetchData, private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/admin']);
    this.layoutService.title.next('User Management');
    this.layoutService.toolbar.next(null);
    this.getUsers();
  }
  getUsers() {
    this.fetchData.users().subscribe(res => {
      console.log(res)
      this.users = res;
    });
  }


  unverify(user) {
    let payload = {...user};
    payload.emailVerified = false;
    this.fetchData.patchUsers(`?id=${payload.id}`, payload).subscribe(res => {
      this.getUsers();
    });
  }
  verify(user) {
    let payload = {...user};
    payload.emailVerified = true;
    this.fetchData.patchUsers(`?id=${payload.id}`, payload).subscribe(res => {
      this.getUsers();
    });
  }
  delete(id) {
    this.fetchData.deleteUsers(id).subscribe(r=>{
      this.getUsers();
    });
  }

}
