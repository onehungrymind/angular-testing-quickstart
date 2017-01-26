import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget>;
  originalName: string;
  selectedCopy: Widget = {id: null};

  set selectedWidget(value: Widget){
    if (value) { this.originalName = value.name; }
    this.selectedCopy = Object.assign({}, value);
  }

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }

  resetWidget() {
    let emptyWidget: Widget = {id: null};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    this.widgetsService.saveWidget(widget)
      .subscribe(responseWidget => {
        if (widget.id) {
          this.replaceWidget(responseWidget);
        } else {
          this.pushWidget(responseWidget);
        }
      });

    // Generally, we would want to wait for the result of `widgetsService.saveWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

  replaceWidget(widget: Widget) {
    this.widgets = this.widgets.map(mapWidget => {
      return mapWidget.id === widget.id ? widget : mapWidget;
    });
  }

  pushWidget(widget: Widget) {
    this.widgets.push(widget);
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget)
      .subscribe(() => {
        this.widgets.splice(this.widgets.indexOf(widget), 1);
      });

    // Generally, we would want to wait for the result of `widgetsService.deleteWidget`
    // before resetting the current widget.
    this.resetWidget();
  }
}

