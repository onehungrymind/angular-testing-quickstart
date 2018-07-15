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

  reCalculateTotal(mode, widgets, newWidget) {
    this.widgets = this.updateWidgets(mode, widgets, newWidget);
    this.price = this.getTotalPrice(this.widgets);
  }

  updateWidgets(mode, widgets, newWidget) {
    switch (mode) {
      case 'create':
        return this.addWidget(widgets, newWidget);
      case 'update':
        return this.updateWidget(widgets, newWidget);
      case 'delete':
        return this.deleteWidget(widgets, newWidget);
      default:
        return widgets;
    }
  }

  addWidget(widgets, widget) {
    const newWidget = Object.assign({}, widget, {id: UUID.UUID()});
    return [...widgets, newWidget];
  }

  updateWidget(widgets, widget) {
    return widgets.map(wdgt => (widget.id === wdgt.id) ? Object.assign({}, widget) : wdgt);
  }

  deleteWidget(widgets, widget) {
    return widgets.filter(wdgt => widget.id !== wdgt.id);
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }
}
