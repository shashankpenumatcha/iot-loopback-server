import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWifiComponent } from './update-wifi.component';

describe('UpdateWifiComponent', () => {
  let component: UpdateWifiComponent;
  let fixture: ComponentFixture<UpdateWifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
