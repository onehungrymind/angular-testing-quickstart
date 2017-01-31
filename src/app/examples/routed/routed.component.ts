import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-routed',
  templateUrl: './routed.component.html',
  styleUrls: ['./routed.component.css']
})
export class RoutedComponent implements OnInit{
  subject: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .map(p => p && p['subject'])
      .forEach(subject => this.subject = subject);
  }

  goToItems() {
    this.router.navigateByUrl('/items');
  }
}
