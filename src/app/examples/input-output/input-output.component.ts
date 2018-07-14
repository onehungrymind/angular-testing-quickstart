import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  template: `
    <h1>Hello {{subject}}!</h1>
    <button (click)="depart()">We Out</button>
  `
})
export class InputOutputComponent {
  @Input() subject: string;
  @Output() leave: EventEmitter<string> = new EventEmitter();
  depart() {
    this.leave.emit(`Ciao ${this.subject}!`);
  }
}
