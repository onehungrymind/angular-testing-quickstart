import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .createComponent(SimpleComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('sets `subject` to `world` by default', () => {
    // How do you get a property on a component under test?
  });

  it('greets the subject', () => {
    // How do you get the h1 element?
    // expect(h1.nativeElement.innerText).toBe('Hello world!');
  });

  it('updates the subject', () => {
    // component.subject = 'developer';
    // How do you force change detection?
    // How do you get the h1 element?
    // expect(h1.nativeElement.innerText).toBe('Hello developer!');
  });
});
