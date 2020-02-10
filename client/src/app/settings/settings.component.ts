import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';
import { Chowkidaar } from '../blocks/chowkidaar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private layoutService: LayoutServiceService, private chowkidaar: Chowkidaar) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.title.next('Settings');
    this.layoutService.back.next(null);
    this.layoutService.toolbar.next('Settings');
  }

  logout() {
    this.chowkidaar.logout();
  }
}
