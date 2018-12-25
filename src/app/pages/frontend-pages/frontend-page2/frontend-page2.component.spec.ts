import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPage2Component } from './frontend-page2.component';

describe('FrontendPage2Component', () => {
  let component: FrontendPage2Component;
  let fixture: ComponentFixture<FrontendPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
