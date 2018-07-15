import { Component, OnInit } from '@angular/core';
import { Widget, WidgetsService } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  currentWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.getWidgets();
    this.reset();
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe((widgets: Widget[]) => this.widgets = widgets);
  }

  reset() {
    this.currentWidget = { id: null, name: '', price: 0, description: ''};
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  deleteWidget(widget) {
    console.log('DELETING', widget)
  }

  saveWidget(widget) {
    console.log('SAVING', widget);
  }

  cancel(widget) {
    this.reset();
  }
}
