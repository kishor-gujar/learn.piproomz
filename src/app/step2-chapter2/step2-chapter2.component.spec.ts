import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2Chapter2Component } from './step2-chapter2.component';

describe('Step2Chapter2Component', () => {
  let component: Step2Chapter2Component;
  let fixture: ComponentFixture<Step2Chapter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2Chapter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2Chapter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
