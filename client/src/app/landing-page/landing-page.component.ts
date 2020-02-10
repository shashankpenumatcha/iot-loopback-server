import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(false);
    this.layoutService.toolbar.next(null);


  }

}
