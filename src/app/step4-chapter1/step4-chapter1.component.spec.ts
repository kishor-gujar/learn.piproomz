import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4Chapter1Component } from './step4-chapter1.component';

describe('Step4Chapter1Component', () => {
  let component: Step4Chapter1Component;
  let fixture: ComponentFixture<Step4Chapter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4Chapter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4Chapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
