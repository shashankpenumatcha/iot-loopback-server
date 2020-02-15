import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.title.next('Contact Us');
    this.layoutService.back.next(['/settings']);
    this.layoutService.toolbar.next(false);
  }

}
