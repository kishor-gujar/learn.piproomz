import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Chapter2Component } from './step3-chapter2.component';

describe('Step3Chapter2Component', () => {
  let component: Step3Chapter2Component;
  let fixture: ComponentFixture<Step3Chapter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3Chapter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3Chapter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
