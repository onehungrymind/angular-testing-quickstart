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
    // How would you get a reference to the button of the child component?
    h1 = de.query(By.css('h1'));
    fixture.detectChanges();
  });

  it('greets the @Input `subject`', () => {
    expect(h1.nativeElement.innerText).toBe('Hello galaxy!');
  });

  it('says goodbye to the `subject`', () => {
    // How would you trigger an event on the child component button?
    // How would you test the result on the parent component?
  });
});
