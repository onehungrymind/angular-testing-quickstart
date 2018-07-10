import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const BASE_URL = 'http://localhost:3000/items/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  loadItems() {
    return this.http.get(BASE_URL);
  }

  loadItem(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  saveItem(item: Item) {
    return (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER);
  }

  updateItem(item: Item) {
    return this.http.patch(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER);
  }

  deleteItem(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`);
  }
}
