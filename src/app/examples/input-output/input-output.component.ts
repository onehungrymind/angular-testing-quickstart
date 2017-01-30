import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {
  @Input('subject') subject: string;
  @Output('leave') leave: EventEmitter<string> = new EventEmitter();

  depart() {
    this.leave.emit(`Ciao ${this.subject}!`);
  }
}
