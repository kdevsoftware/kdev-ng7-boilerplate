import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPage3Component } from './backend-page3.component';

describe('BackendPage3Component', () => {
  let component: BackendPage3Component;
  let fixture: ComponentFixture<BackendPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
