import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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
      .pipe(map(p => p && p['subject']))
      .subscribe(subject => this.subject = subject);
  }

  goToItems() {
    this.router.navigateByUrl('/items');
  }
}
