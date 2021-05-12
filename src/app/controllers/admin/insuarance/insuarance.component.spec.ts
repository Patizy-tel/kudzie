/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsuaranceComponent } from './insuarance.component';

describe('InsuaranceComponent', () => {
  let component: InsuaranceComponent;
  let fixture: ComponentFixture<InsuaranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuaranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuaranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
