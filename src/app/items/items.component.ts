import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  originalName: string;
  selectedCopy: Item = {id: null};

  set selectedItem(value: Item){
    if (value) { this.originalName = value.name; }
    this.selectedCopy = Object.assign({}, value);
  }

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.loadItems()
      .subscribe((items: Item[]) => this.items = items);
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item)
      .subscribe((responseItem: Item) => {
        if (item.id) {
          this.replaceItem(responseItem);
        } else {
          this.pushItem(responseItem);
        }
      });

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  replaceItem(item: Item) {
    this.items = this.items.map(mapItem => {
      return mapItem.id === item.id ? item : mapItem;
    });
  }

  pushItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item)
      .subscribe(() => {
        this.items.splice(this.items.indexOf(item), 1);
      });

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }
}

