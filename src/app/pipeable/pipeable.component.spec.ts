import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeableComponent } from './pipeable.component';

describe('PipeableComponent', () => {
  let component: PipeableComponent;
  let fixture: ComponentFixture<PipeableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
