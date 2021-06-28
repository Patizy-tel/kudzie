import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphslistComponent } from './graphslist.component';

describe('GraphslistComponent', () => {
  let component: GraphslistComponent;
  let fixture: ComponentFixture<GraphslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
