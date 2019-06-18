import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Production2Component } from './production2.component';

describe('Production2Component', () => {
  let component: Production2Component;
  let fixture: ComponentFixture<Production2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Production2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Production2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
