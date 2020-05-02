import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchData } from '../shared/services/fetch-data';

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.css']
})
export class IconSelectComponent implements OnInit {
  @Input() type;
  @Output() iconSelected = new EventEmitter();
  icons: any;
  selectedIcon: any;
  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.fetchData.icons(this.type).subscribe(res => {
      this.icons = res;
    });
  }

  select() {
    this.iconSelected.emit(this.selectedIcon);
  }

}
