import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPage1Component } from './frontend-page1.component';

describe('FrontendPage1Component', () => {
  let component: FrontendPage1Component;
  let fixture: ComponentFixture<FrontendPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
