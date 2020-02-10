import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../layout-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  step = 1;
  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
    this.layoutService.header.next(true);
    this.layoutService.back.next(null);
    this.layoutService.title.next('Setup your Hub');

  }
  changeStep(title) {
    this.layoutService.title.next(title);

  }

}
