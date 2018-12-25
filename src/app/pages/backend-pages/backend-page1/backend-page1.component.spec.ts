import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPage1Component } from './backend-page1.component';

describe('BackendPage1Component', () => {
  let component: BackendPage1Component;
  let fixture: ComponentFixture<BackendPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
