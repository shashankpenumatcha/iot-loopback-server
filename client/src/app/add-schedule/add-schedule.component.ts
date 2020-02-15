import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnectSocket} from '../sockets/connect';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit, OnDestroy {
  deviceLength: number  = null;
  devices: any = {};
  allDevices: any = {};
  subscriptions = new Subscription();
  boards: any [] = [];
  selectedSwitches: any = {};
  assignedSwitches: any = {};
  name: string;
  adding: boolean;
  activeRequests = [];
  switchCount = 0;
  selectedSwitchCount = 0;
  start: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  stop: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  selectedDaysLength = 0;
  showLocations: false;
  selectedForSchedule = {};

  days: any = [
    {i: 0, v: 'S', selected: false},
    {i: 1, v: 'M', selected: false},
    {i: 2, v: 'T', selected: false},
    {i: 3, v: 'W', selected: false},
    {i: 4, v: 'T', selected: false},
    {i: 5, v: 'F', selected: false},
    {i: 6, v: 'S', selected: false},

  ]


  constructor(private layoutService: LayoutServiceService, private router: Router, private connect: ConnectSocket, private socket: Socket) { }

  displayCounter(selected) {
    this.selectedForSchedule = selected;
  }
  ngOnInit() {
    this.layoutService.toolbar.next(false);
    this.layoutService.title.next("Add Schedule");
    this.layoutService.header.next(true);
    this.layoutService.back.next(['/schedules']);
    this.subscriptions.add(
      this.connect.onlineDevices$.subscribe(res => {
        if (res) {
           this.allDevices = JSON.parse(JSON.stringify(res));
        }
        if (this.allDevices) {
          this.deviceLength = Object.keys(this.allDevices).length;
        } else {
          this.deviceLength = 0;
        }
        if (!this.deviceLength) {
          this.router.navigate(['/schedules']);
        }
      })
    );
    this.socket.on('scheduleAdded', (res) => {
      console.log(res)
      if (!res.error) {
        if (res.name && res.deviceId) {
          this.activeRequests.splice(this.activeRequests.indexOf(res.deviceId), 1);
        }
        if (!this.activeRequests.length && res.name) {
          this.adding = false;
          this.connect.getSchedules();
          this.router.navigate(['/schedules']);
        }
      } else {
        this.adding = false;
        this.activeRequests = [];
        alert(res.error);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socket.removeListener('scheduleAdded');

  }

  addSchedule() {
    let payload: any = {};

    if (this.name && this.start && this.stop) {
      let schedule: any = {};
      let start = ([this.start.hour < 10 ? String('0' + this.start.hour).slice(-2) : this.start.hour,
      this.start.minute < 10 ? String('0' + this.start.minute).slice(-2) : this.start.minute,
      this.start.second < 10 ? String('0' + this.start.second).slice(-2) : this.start.second]).join(':').toString();

      let stop = ([this.stop.hour < 10 ? String('0' + this.stop.hour).slice(-2) : this.stop.hour,
      this.stop.minute < 10 ? String('0' + this.stop.minute).slice(-2) : this.stop.minute,
      this.stop.second < 10 ? String('0' + this.stop.second).slice(-2) : this.stop.second]).join(':').toString();

      payload.name = this.name;
      schedule.start = start;
      schedule.end = stop;
      schedule.days = this.days.filter(f=>f.selected).map(m=>m.i);
      payload.devices = this.selectedForSchedule;
      payload.schedule = schedule;
      this.adding = true;
      this.activeRequests = Object.keys(this.selectedForSchedule) || [];
      this.socket.emit('addSchedule', payload, res => {
        if (!res || res.error) {
          this.adding = false;
          alert(res.error);
        }
      });

    }

  }

  selectDay(day: any) {
    day.selected = !day.selected;
    this.selectedDaysLength = (this.days.filter(f => f.selected)).length;
  }

  disableBack() {
    this.layoutService.back.next(false);

  }
  enableBack() {
    this.layoutService.back.next(['/schedules']);

  }
}
