import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2Chapter1Component } from './step2-chapter1.component';

describe('Step2Chapter1Component', () => {
  let component: Step2Chapter1Component;
  let fixture: ComponentFixture<Step2Chapter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2Chapter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2Chapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
