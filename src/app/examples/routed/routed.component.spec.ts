/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoutedComponent } from './routed.component';

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
