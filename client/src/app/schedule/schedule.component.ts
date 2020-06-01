import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddScheduleComponent } from '../add-schedule/add-schedule.component';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class ScheduleComponent implements OnInit, OnDestroy {
  activeRequests: any = {};
  deleteRequests: any = {};
  raw: any;
  deviceLength: number  = null;
  onlineDevices: any = {};
  subscriptions = new Subscription();
  schedules: any = {};
  editSchedule = null;
  object = Object;
  days: any = [
    {i: 0, v: 'S', selected: false},
    {i: 1, v: 'M', selected: false},
    {i: 2, v: 'T', selected: false},
    {i: 3, v: 'W', selected: false},
    {i: 4, v: 'T', selected: false},
    {i: 5, v: 'F', selected: false},
    {i: 6, v: 'S', selected: false},
  ];

  constructor(private layoutService:LayoutServiceService, private router: Router, private connect: ConnectSocket, private socket: Socket, config: NgbModalConfig, private modalService: NgbModal
  ) {
     config.backdrop = 'static';
     config.keyboard = false;
     config.size = 'lg';
    }

    scheduleEdited(e) {
      this.editSchedule = null;
      this.schedules = {};
      const devices = Object.keys(this.onlineDevices);
      devices.map(m => {
        this.socket.emit('getSchedules', m);
        return m;
      });
    }
    selectEdit(schedule) {
      this.editSchedule = schedule;
    }

  ngOnInit() {
    this.layoutService.toolbar.next("Schedules");

    this.layoutService.title.next("Schedules");
    this.layoutService.header.next(true);
    this.layoutService.back.next(false);
    this.subscriptions.add(
      this.connect.onlineDevices$.subscribe(res => {
        if (res) {
           this.onlineDevices = JSON.parse(JSON.stringify(res));
        }
        if (this.onlineDevices) {
          this.deviceLength = Object.keys(this.onlineDevices).length;
        } else {
          this.deviceLength = 0;
        }
        if (!this.deviceLength) {
          this.router.navigate(['/']);
        } else {
          const devices = Object.keys(this.onlineDevices);
          devices.map(m => {
            this.socket.emit('getSchedules', m);
            return m;
          });
        }

      })
    );
    this.socket.on('scheduleToggled', msg => {
      if (msg.err && !msg.deviceId) {
        this.activeRequests[msg.scheduleId] = null;
      }
      if (msg.deviceId && this.activeRequests[msg.scheduleId] && this.activeRequests[msg.scheduleId].length &&
          this.activeRequests[msg.scheduleId].indexOf(msg.deviceId) >= 0) {
        this.activeRequests[msg.scheduleId].splice(this.activeRequests[msg.scheduleId].indexOf(msg.deviceId), 1);
      }
      if (this.activeRequests[msg.scheduleId] && !this.activeRequests[msg.scheduleId].length) {
        this.activeRequests[msg.scheduleId] = null;
      }
      const d = Object.keys(this.onlineDevices);
      d.map(m => {
        this.socket.emit('getSchedules', m);
        return m;
      });
    });

    this.socket.on('scheduleDeleted', msg => {
      if (msg.err && !msg.deviceId) {
        this.deleteRequests[msg.scheduleId] = null;
      }
      if (msg.deviceId && this.deleteRequests[msg.scheduleId] && this.deleteRequests[msg.scheduleId].length &&
          this.deleteRequests[msg.scheduleId].indexOf(msg.deviceId) >= 0) {
        this.deleteRequests[msg.scheduleId].splice(this.deleteRequests[msg.scheduleId].indexOf(msg.deviceId), 1);
      }
      if (this.deleteRequests[msg.scheduleId] && !this.deleteRequests[msg.scheduleId].length) {
        this.deleteRequests[msg.scheduleId] = null;
      }
      const d = Object.keys(this.onlineDevices);
      d.map(m => {
        this.socket.emit('getSchedules', m);
        return m;
      });
    });
    this.getSchedules();
  }

  getSchedules() {
    this.socket.on('schedules', (msg) => {
      if (!msg.error) {
       // this.schedules = msg;
       this.raw = msg;
        if (msg.schedules && msg.schedules.length) {
          msg.schedules.map(m => {
            if (!this.schedules[m.scheduleId]) {
              this.schedules[m.scheduleId] = {};
            }
            this.schedules[m.scheduleId].schedule = m;
            if (this.schedules[m.scheduleId].schedule && this.schedules[m.scheduleId].schedule.days) {
              this.schedules[m.scheduleId].daysList = this.schedules[m.scheduleId].schedule.days.split(',');
            }
            if (!this.schedules[m.scheduleId].devices) {
              this.schedules[m.scheduleId].devices = {};
            }
            if (!this.schedules[m.scheduleId].devices[msg.deviceId]) {
              this.schedules[m.scheduleId].devices[msg.deviceId] = {};
            }
            if (!this.schedules[m.scheduleId].devices[msg.deviceId][m.sw_id]) {
              this.schedules[m.scheduleId].devices[msg.deviceId][m.sw_id] = m;
              if (!this.schedules[m.scheduleId].switchSize) {
                this.schedules[m.scheduleId].switchSize = 0;
              }
              this.schedules[m.scheduleId].switchSize += 1;
            }
            return m;
          });
        }
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socket.removeListener('schedules');

  }

  launch() {
    if (this.deviceLength) {
      this.router.navigate(['/add-schedule']);
 /*      const modalRef = this.modalService.open(AddScheduleComponent);
      modalRef.result.then(res => {
        const devices = Object.keys(this.onlineDevices);
        devices.map(m => {
          this.socket.emit('getSchedules', m);
          return m;
        });
      }, err => {
        const devices = Object.keys(this.onlineDevices);
        devices.map(m => {
          this.socket.emit('getSchedules', m);
          return m;
        });
      }); */

    }
  }

  toggleActive(schedule, devices) {
    if (!this.activeRequests[schedule.scheduleId]) {
      this.activeRequests[schedule.scheduleId] = [];
    }

    let deviceKeys = Object.keys(devices);

    if (deviceKeys && deviceKeys.length) {
      deviceKeys.map(device => {
        this.activeRequests[schedule.scheduleId].push(device);
        let payload: any = {};
        payload.scheduleId = schedule.scheduleId;
        payload.deviceId = device;
        payload.active = schedule.active;
        this.socket.emit('toggleSchedule', payload);
        return device;
      });
    }

  }

  deleteSchedule(schedule, devices) {
    if (!this.deleteRequests[schedule.scheduleId]) {
      this.deleteRequests[schedule.scheduleId] = [];
    }

    let deviceKeys = Object.keys(devices);

    if (deviceKeys && deviceKeys.length) {
      this.schedules = {};
      deviceKeys.map(device => {
        this.deleteRequests[schedule.scheduleId].push(device);
        let payload: any = {};
        payload.scheduleId = schedule.scheduleId;
        payload.deviceId = device;
        this.socket.emit('deleteSchedule', payload);
        return device;
      });
    }

  }

}
