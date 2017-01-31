import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../greeting-service/greeting.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  subject: {name: string} = this.service.subject;
  constructor(private service: GreetingService) { }

  ngOnInit() {
  }

}
