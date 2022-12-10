import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestfromComponent } from './latestfrom.component';

describe('LatestfromComponent', () => {
  let component: LatestfromComponent;
  let fixture: ComponentFixture<LatestfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
