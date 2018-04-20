import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4Chapter2Component } from './step4-chapter2.component';

describe('Step4Chapter2Component', () => {
  let component: Step4Chapter2Component;
  let fixture: ComponentFixture<Step4Chapter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4Chapter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4Chapter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
