/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyserviceComponent } from './myservice.component';

describe('MyserviceComponent', () => {
  let component: MyserviceComponent;
  let fixture: ComponentFixture<MyserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
