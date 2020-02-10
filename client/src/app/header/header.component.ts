import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { map, filter, mergeMap } from 'rxjs/operators';
import { LayoutServiceService } from '../layout-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: any;
  back: any;
  show: boolean;
  subscriptions = new Subscription();
  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.layoutService.header.subscribe(header => {
        this.show = header;
      }));

    this.subscriptions.add( this.layoutService.title.subscribe(title => {
      this.title = title;
    }));

    this.subscriptions.add( this.layoutService.back.subscribe(back => {
      this.back = back;
    }));

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
