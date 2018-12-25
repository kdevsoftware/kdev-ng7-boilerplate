import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPage5Component } from './backend-page5.component';

describe('BackendPage5Component', () => {
  let component: BackendPage5Component;
  let fixture: ComponentFixture<BackendPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
