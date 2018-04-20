import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1Chapter2Component } from './step1-chapter2.component';

describe('Step1Chapter2Component', () => {
  let component: Step1Chapter2Component;
  let fixture: ComponentFixture<Step1Chapter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1Chapter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1Chapter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
