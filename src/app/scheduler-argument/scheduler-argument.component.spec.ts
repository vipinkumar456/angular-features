import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerArgumentComponent } from './scheduler-argument.component';

describe('SchedulerArgumentComponent', () => {
  let component: SchedulerArgumentComponent;
  let fixture: ComponentFixture<SchedulerArgumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerArgumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerArgumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
