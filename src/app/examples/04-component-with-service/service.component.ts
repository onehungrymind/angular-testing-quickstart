import { Component, OnInit } from '@angular/core';
import { GreetingService } from './greeting.service';
@Component({
  selector: 'app-service',
  template: '<h1>Hello {{subject.name}}!</h1>'
})
export class ServiceComponent implements OnInit {
  subject: {name: string} = this.service.subject;
  constructor(private service: GreetingService) { }
  ngOnInit() { }
}
