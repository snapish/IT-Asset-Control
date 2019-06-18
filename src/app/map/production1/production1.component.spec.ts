import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Production1Component } from './production1.component';

describe('Production1Component', () => {
  let component: Production1Component;
  let fixture: ComponentFixture<Production1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Production1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Production1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
