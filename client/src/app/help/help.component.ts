import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.title.next('Help and FAQ');
    this.layoutService.back.next(['/settings']);
    this.layoutService.toolbar.next(false);
  }

}
