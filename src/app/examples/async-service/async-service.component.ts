import { Component, OnInit } from '@angular/core';
import { AsyncGreetingService } from './async-greeting.service';

@Component({
  selector: 'app-async-service',
  templateUrl: './async-service.component.html',
  styleUrls: ['./async-service.component.css']
})
export class AsyncServiceComponent implements OnInit {
  greeting: string;
  subject: string;
  punctuation: string;
  constructor(private service: AsyncGreetingService) { }

  ngOnInit() {
    this.service.getGreeting()
      .then(res => this.greeting = res);
    this.service.getSubject()
      .then(res => this.subject = res);
    this.service.getPunctuation()
      .then(res => this.punctuation = res);
  }

}
