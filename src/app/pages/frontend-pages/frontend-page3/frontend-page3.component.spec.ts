import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPage3Component } from './frontend-page3.component';

describe('FrontendPage3Component', () => {
  let component: FrontendPage3Component;
  let fixture: ComponentFixture<FrontendPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
