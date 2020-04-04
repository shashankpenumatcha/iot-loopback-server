import { Component, OnInit } from '@angular/core';
import { FetchData } from 'src/app/shared/services/fetch-data';
import { LayoutServiceService } from 'src/app/layout-service.service';


@Component({
  selector: 'app-register-board',
  templateUrl: './register-board.component.html',
  styleUrls: ['./register-board.component.css']
})
export class RegisterBoardComponent implements OnInit {

  deviceId: string;
  device: any;
  message: any = null;
  boards: any;
  allBoards: any;

  constructor(private fetchData: FetchData, private layoutService: LayoutServiceService) { }

  search() {
    console.log(this.deviceId);
    if (!this.deviceId) {
      this.boards = this.allBoards;
      return;
    }
    this.boards = this.allBoards.filter(f => f.deviceId && f.deviceId.indexOf(this.deviceId) >= 0);
  }
  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/admin']);
    this.layoutService.title.next('Board Management');
    this.layoutService.toolbar.next(null);
    this.getBoards();
  }
  getBoards() {
    this.fetchData.adminBoards().subscribe(res => {
      console.log(res);
      if (res && res.length) {

        this.boards = [...res];
        this.allBoards = [...res];
      }
    });
  }


  deregister(device) {
    let payload = {...device};
    payload.deviceId = null;
    payload.deviceId_fk = null;

    this.fetchData.patchAdminBoards(`?id=${payload.id}`, payload).subscribe(res => {
      this.getBoards();
    });
  }

  delete(id) {
    this.fetchData.deleteAdminBoards(id).subscribe(r=>{
      this.getBoards();
    });
  }
  register() {
    this.message = null;
    this.fetchData.registerBoard({}).subscribe(res => {
      if (res && res.id) {
        this.message = `board added - ${res.id}`;
      }
      this.getBoards();

    }, e => {
      this.message = `Error while adding board`;
    });
  }

}
