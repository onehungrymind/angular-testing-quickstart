import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Widget } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class RefactorService {
  price;
  mode;
  widgets: Widget[];

  constructor() {
  }

  reCalculateTotal(widget: Widget) {
    switch (this.mode) {
      case 'create':
        const newWidget = Object.assign({}, widget, {id: UUID.UUID()});
        this.widgets = [...this.widgets, newWidget];
        break;
      case 'update':
        this.widgets = this.widgets.map(wdgt => (widget.id === wdgt.id) ? Object.assign({}, widget) : wdgt);
        break;
      case 'delete':
        this.widgets = this.widgets.filter(wdgt => widget.id !== wdgt.id);
        break;
      default:
        break;
    }

    this.price = this.widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

  updateWidgets(mode, widgets, newWidget) {
    // Complete function
  }

  addWidget(widgets, widget) {
    // Complete function
  }

  updateWidget(widgets, widget) {
    // Complete function
  }

  deleteWidget(widgets, widget) {
    // Complete function
  }

  getTotalPrice(widgets) {
    // Complete function
  }
}
