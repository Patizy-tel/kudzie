/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntergrationsListComponent } from './intergrations-list.component';

describe('IntergrationsListComponent', () => {
  let component: IntergrationsListComponent;
  let fixture: ComponentFixture<IntergrationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntergrationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntergrationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
