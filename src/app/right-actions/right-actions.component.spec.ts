import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightActionsComponent } from './right-actions.component';

describe('RightActionsComponent', () => {
  let component: RightActionsComponent;
  let fixture: ComponentFixture<RightActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
