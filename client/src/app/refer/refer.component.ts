import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.css']
})
export class ReferComponent implements OnInit {

  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.title.next('Refer and Earn');
    this.layoutService.back.next(['/settings']);
    this.layoutService.toolbar.next(false);
  }

}
