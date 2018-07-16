import { Component, OnInit } from '@angular/core';
import { RemoteService } from './remote.service';

interface Widget {
  id: number;
  name: string;
  price: number;
  description?: string;
}

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  widgets: Widget[];

  constructor(private remoteService: RemoteService) {
  }

  ngOnInit() {
    this.getWidgets();
  }

  getWidgets() {
    this.remoteService.all()
      .subscribe((widgets: Widget[]) => this.widgets = widgets);
  }

  createWidget(widget) {
    this.remoteService.create(widget)
      .subscribe(response => {
        this.getWidgets();
      });
  }
}
