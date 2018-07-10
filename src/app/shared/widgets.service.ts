import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  constructor(private http: HttpClient) {}

  loadWidgets() {
    return this.http.get(BASE_URL);
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER);
  }

  updateWidget(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER);
  }

  deleteWidget(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`);
  }
}
