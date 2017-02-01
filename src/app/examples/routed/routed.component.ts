import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routed',
  template: '<h1>Hello {{subject}}!</h1>'
})
export class RoutedComponent implements OnInit {
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
