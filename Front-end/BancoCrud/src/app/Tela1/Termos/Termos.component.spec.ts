/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermosComponent } from './Termos.component';

describe('TermosComponent', () => {
  let component: TermosComponent;
  let fixture: ComponentFixture<TermosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
