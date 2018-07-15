import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  currentItem: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
    this.resetCurrentItem();
  }

  resetCurrentItem() {
    this.currentItem = { id: null, name: '', price: 0, description: '' };
  }

  selectItem(item) {
    this.currentItem = item;
  }

  cancel(item) {
    this.resetCurrentItem();
  }

  getItems() {
    this.itemsService.all()
      .subscribe((items: Item[]) => this.items = items);
  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item);
    }
  }

  createItem(item) {
    this.itemsService.create(item)
      .subscribe(response => {
        this.getItems();
        this.resetCurrentItem();
      });
  }

  updateItem(item) {
    this.itemsService.update(item)
      .subscribe(response => {
        this.getItems();
        this.resetCurrentItem();
      });
  }

  deleteItem(item) {
    this.itemsService.delete(item)
      .subscribe(response => {
        this.getItems();
        this.resetCurrentItem();
      });
  }
}
