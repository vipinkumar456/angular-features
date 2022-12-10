import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforebootstrapComponent } from './beforebootstrap.component';

describe('BeforebootstrapComponent', () => {
  let component: BeforebootstrapComponent;
  let fixture: ComponentFixture<BeforebootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforebootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforebootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
