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
    button = de.query(By.css('button'));

    component.subject = 'galaxy';
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
    component.leave.subscribe(event => farewell = event);

    button.triggerEventHandler('click', null);
    expect(farewell).toBe('Ciao galaxy!');
  });
});
