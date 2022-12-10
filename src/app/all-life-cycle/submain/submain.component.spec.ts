import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmainComponent } from './submain.component';

describe('SubmainComponent', () => {
  let component: SubmainComponent;
  let fixture: ComponentFixture<SubmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
