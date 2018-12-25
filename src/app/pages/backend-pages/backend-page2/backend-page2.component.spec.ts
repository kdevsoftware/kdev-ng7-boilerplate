import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPage2Component } from './backend-page2.component';

describe('BackendPage2Component', () => {
  let component: BackendPage2Component;
  let fixture: ComponentFixture<BackendPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
