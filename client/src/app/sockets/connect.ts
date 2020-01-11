import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConnectSocket {

  rooms: any = {};
  roomsMap = new BehaviorSubject<any>(null);
  boards =  new BehaviorSubject<any>(null);

  constructor(private socket: Socket) {
    this.getSwitches();
  }

  join(msg: string, device: any) {
      this.joined(device);
      this.socket.emit('join', msg);
  }

  joined(device) {
    return this.socket.fromEvent('joined').subscribe(m => {
      if (m != null && typeof(m) === 'string') {
          this.rooms[m] = device;
          this.roomsMap.next(this.rooms);
          this.socket.emit('getBoards', m);
      }
    });
  }

  leaveAll(ids: string[]) {
    if (ids && ids.length) {
      ids.map(id => {
        this.socket.emit('leave', id);
        return id;
      });
    }
  }

  getSwitches() {
    return this.socket.fromEvent('boards').subscribe(m => {
      if (this.rooms && m != null && typeof(m) === 'object') {
        this.boards.next(m);
      }
    });
  }

  toggle(device: string, value: boolean, board: string, swtch: number){
    const msg = {d: device, v: value, b: board, s: swtch};
    this.socket.emit('toggle', msg);
  }

}
