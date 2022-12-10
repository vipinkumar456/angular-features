import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayargumentsComponent } from './arrayarguments.component';

describe('ArrayargumentsComponent', () => {
  let component: ArrayargumentsComponent;
  let fixture: ComponentFixture<ArrayargumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayargumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayargumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
