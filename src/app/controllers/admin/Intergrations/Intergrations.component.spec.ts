/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntergrationsComponent } from './Intergrations.component';

describe('IntergrationsComponent', () => {
  let component: IntergrationsComponent;
  let fixture: ComponentFixture<IntergrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntergrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntergrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
