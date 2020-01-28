import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Socket } from 'ngx-socket-io';
import { ConnectSocket } from '../sockets/connect';


@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit, OnDestroy {

  @Input() deviceId: string;
  adding: boolean;
  boardId: string;

  constructor(public activeModal: NgbActiveModal, private socket: Socket, private connect: ConnectSocket) { }

  ngOnInit() {
    this.socket.on('board_added', (res) => {
      if (!res.error) {
        this.adding = false;
        if (!this.adding && res.boardId) {
          this.connect.getSwitches();
          this.activeModal.dismiss();
        }
      } else {
        this.adding = false;
        alert(res.error);
      }
    });
  }

  addBoard() {
    this.adding = true;
    this.socket.emit('addBoard', {boardId: this.boardId, deviceId: this.deviceId, token: localStorage.getItem('token')}, res => {
      if (!res || res.error) {
        this.adding = false;
        alert(res.error);
      }
    });
  }

  ngOnDestroy() {
    this.socket.removeListener('board_added');
  }

}
