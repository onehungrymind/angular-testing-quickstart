import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: '<h1>Hello {{subject}}!</h1>'
})
export class SimpleComponent implements OnInit {
  subject = 'world';
  constructor() { }
  ngOnInit() { }
}
