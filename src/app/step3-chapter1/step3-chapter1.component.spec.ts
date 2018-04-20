import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Chapter1Component } from './step3-chapter1.component';

describe('Step3Chapter1Component', () => {
  let component: Step3Chapter1Component;
  let fixture: ComponentFixture<Step3Chapter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3Chapter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3Chapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
