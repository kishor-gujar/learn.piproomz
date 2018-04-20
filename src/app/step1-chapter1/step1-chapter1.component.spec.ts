import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1Chapter1Component } from './step1-chapter1.component';

describe('Step1Chapter1Component', () => {
  let component: Step1Chapter1Component;
  let fixture: ComponentFixture<Step1Chapter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1Chapter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1Chapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
