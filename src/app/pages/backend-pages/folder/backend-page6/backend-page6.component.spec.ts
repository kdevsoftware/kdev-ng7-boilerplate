import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPage6Component } from './backend-page6.component';

describe('BackendPage6Component', () => {
  let component: BackendPage6Component;
  let fixture: ComponentFixture<BackendPage6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPage6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
