import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

interface Widget {
  id: number;
  name: string;
  price: number;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL);
  }

  create(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER);
  }

  update(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER);
  }

  delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`);
  }
}
