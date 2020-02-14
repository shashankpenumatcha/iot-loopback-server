import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';
import { ConnectSocket } from '../sockets/connect';
import { Subscription } from 'rxjs';
import {duration} from 'moment';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit, OnDestroy {
  usage: any;
  subscription = new Subscription();
  location = null;
  constructor(private layoutService: LayoutServiceService, private connect: ConnectSocket) { }

  ngOnInit() {
    this.layoutService.toolbar.next("Usage");
    this.layoutService.title.next("Usage");
    this.layoutService.header.next(true);
    this.layoutService.back.next(false);
    this.connect.getUsage();

    this.subscription.add(
      this.connect.usage$.subscribe(res => {
        this.usage = res;
        if(res){

          let keys = Object.keys(this.usage);
          if(keys && keys.length){
            this.location = keys[0];
          }
        }
      }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
