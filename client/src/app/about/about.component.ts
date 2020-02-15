import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.title.next('About Us');
    this.layoutService.back.next(['/settings']);
    this.layoutService.toolbar.next(false);
  }

}
