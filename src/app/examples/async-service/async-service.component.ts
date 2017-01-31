import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../greeting-service/greeting.service';

@Component({
  selector: 'app-async-service',
  template: '<h1>{{greeting}} {{subject}}{{punctuation}}</h1>'
})
export class AsyncServiceComponent implements OnInit {
  greeting: string;
  subject: string;
  punctuation: string;
  constructor(private service: GreetingService) { }

  ngOnInit() {
    this.service.getGreeting()
      .then(res => this.greeting = res);
    this.service.getSubject()
      .then(res => this.subject = res);
    this.service.getPunctuation()
      .then(res => this.punctuation = res);
  }
}
