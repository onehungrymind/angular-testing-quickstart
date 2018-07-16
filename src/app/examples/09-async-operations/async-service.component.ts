import { Component, OnInit } from '@angular/core';
import { AsyncService } from './async.service';

@Component({
  selector: 'app-async-service',
  template: '<h1>{{greeting}} {{subject}}{{punctuation}}</h1>'
})
export class AsyncServiceComponent implements OnInit {
  greeting: string;
  subject: string;
  punctuation: string;
  constructor(private service: AsyncService) { }

  ngOnInit() {
    this.getGreeting();
    this.getPunctuation();
    this.getSubject();
  }

  getGreeting() {
    this.service.getGreeting()
      .then(res => this.greeting = res);
  }

  getSubject() {
    this.service.getSubject()
      .then(res => this.subject = res);
  }

  getPunctuation() {
    this.service.getPunctuation()
      .then(res => this.punctuation = res);
  }
}
