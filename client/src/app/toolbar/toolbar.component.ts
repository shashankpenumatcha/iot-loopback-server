import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selected = null;
  subscriptions = new Subscription();
  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.subscriptions.add(this.layoutService.toolbar.subscribe(t => {
      this.selected = t;
    }));
  }

}
