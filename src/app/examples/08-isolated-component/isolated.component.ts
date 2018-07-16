import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isolated',
  template: '<h1>Hello {{subject}}!</h1>'
})
export class IsolatedComponent implements OnInit {
  subject = 'world';
  constructor() { }
  ngOnInit() { }
}
