import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSubComponent } from './dynamic-sub.component';

describe('DynamicSubComponent', () => {
  let component: DynamicSubComponent;
  let fixture: ComponentFixture<DynamicSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
