/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FuelListComponent } from './fuel-list.component';

describe('FuelListComponent', () => {
  let component: FuelListComponent;
  let fixture: ComponentFixture<FuelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
