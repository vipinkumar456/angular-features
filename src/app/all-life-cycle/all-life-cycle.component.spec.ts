import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLifeCycleComponent } from './all-life-cycle.component';

describe('AllLifeCycleComponent', () => {
  let component: AllLifeCycleComponent;
  let fixture: ComponentFixture<AllLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
