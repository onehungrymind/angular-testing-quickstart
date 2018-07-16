import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { InputOutputComponent } from './input-output.component';

@Component({
  template: `<app-input-output
    [subject]="subject"
    (leave)="onLeave($event)">
  </app-input-output>
  `
})
class TestInputOutputHostComponent {
  subject = 'galaxy';
  completeGreeting: string;
  onLeave(greeting: string) { this.completeGreeting = greeting; }
}

describe('HostComponent', () => {
  let component: TestInputOutputHostComponent;
  let fixture: ComponentFixture<TestInputOutputHostComponent>;
  let de: DebugElement;
  let button: DebugElement;
  let h1: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ InputOutputComponent, TestInputOutputHostComponent ]
    })
    .createComponent(TestInputOutputHostComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    button = de.query(By.css('button'));
    h1 = de.query(By.css('h1'));
    fixture.detectChanges();
  });

  it('greets the @Input `subject`', () => {
    expect(h1.nativeElement.innerText).toBe('Hello galaxy!');
  });

  it('says goodbye to the `subject`', () => {
    button.triggerEventHandler('click', null);
    expect(component.completeGreeting).toBe('Ciao galaxy!');
  });
});
