import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let de: DebugElement;
  let button: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .createComponent(InputOutputComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    // How would you get a reference to the button on the component?

    // How would you initialize a component with a property i.e. subject
    fixture.detectChanges();
  });

  it('has `subject` as an @Input', () => {
    expect(component.subject).toBe('galaxy');
  });

  it('greets the @Input `subject`', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Hello galaxy!');
  });

  it('says goodbye to the `subject`', () => {
    let farewell;
    // How do you subscribe to an event on a component?

    // How do you trigger an event on a component?
    expect(farewell).toBe('Ciao galaxy!');
  });
});
