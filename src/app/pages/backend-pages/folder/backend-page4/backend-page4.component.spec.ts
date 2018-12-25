import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPage4Component } from './backend-page4.component';

describe('BackendPage4Component', () => {
  let component: BackendPage4Component;
  let fixture: ComponentFixture<BackendPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
