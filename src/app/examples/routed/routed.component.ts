import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-routed',
  templateUrl: './routed.component.html',
  styleUrls: ['./routed.component.css']
})
export class RoutedComponent {

  constructor(private router: Router) { }

  goToItems() {
    this.router.navigateByUrl('/items');
  }
}
