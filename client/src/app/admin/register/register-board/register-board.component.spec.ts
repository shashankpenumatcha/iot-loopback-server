import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBoardComponent } from './register-board.component';

describe('RegisterBoardComponent', () => {
  let component: RegisterBoardComponent;
  let fixture: ComponentFixture<RegisterBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
