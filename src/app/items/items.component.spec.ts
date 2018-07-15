/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { of } from 'rxjs/internal/observable/of';
import { noop } from 'rxjs/internal-compatibility';

import { Item, ItemsService } from '../shared';
import { ItemsComponent } from './items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { DebugElement } from '@angular/core';

class ItemsServiceStub {
  all() {
    return of(noop())
  }

  create() {
    return of(noop())
  }

  update() {
    return of(noop())
  }

  delete() {
    return of(noop())
  }
}

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let debugElement: DebugElement;
  let service: ItemsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsComponent,
        ItemsListComponent,
        ItemDetailComponent
      ],
      providers: [
        {provide: ItemsService, useClass: ItemsServiceStub}
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        AppMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(ItemsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getItems and resetCurrentItem on init', () => {
    spyOn(component, 'getItems');
    spyOn(component, 'resetCurrentItem');

    component.ngOnInit();

    expect(component.getItems).toHaveBeenCalled();
    expect(component.resetCurrentItem).toHaveBeenCalled();
  });

  it('should reset the current item on resetCurrentItem', () => {
    const defaultItem = {id: null, name: '', price: 0, description: ''};
    component.resetCurrentItem();
    component.currentItem.price = 1000;
    expect(component.currentItem.price).toBe(1000);

    component.resetCurrentItem();
    expect(component.currentItem.price).toBe(0);
    expect(component.currentItem).toEqual(defaultItem);
  });

  it('should call reset the current item on cancel', () => {
    spyOn(component, 'resetCurrentItem');

    component.cancel({});

    expect(component.resetCurrentItem).toHaveBeenCalled();
  });

  it('should set the current item on selectItem', () => {
    const mockItem: Item = {id: null, name: 'new item', description: 'new item', price: 100};

    component.selectItem(mockItem);

    expect(component.currentItem).toEqual(mockItem);
  });

  it('should call all from itemsService on getItems', () => {
    spyOn(service, 'all').and.callThrough();

    component.getItems();

    expect(service.all).toHaveBeenCalled();
  });

  it('should call createItem if item DOES NOT have an id on saveItem', () => {
    const mockItem: Item = {id: null, name: 'new item', description: 'new item', price: 100};
    spyOn(component, 'createItem').and.callThrough();
    spyOn(component, 'updateItem').and.callThrough();

    component.saveItem(mockItem);

    expect(component.createItem).toHaveBeenCalledWith(mockItem);
    expect(component.updateItem).not.toHaveBeenCalled();
  });

  it('should call updateItem if item DOES have an id on saveItem', () => {
    const mockItem: Item = {id: 100, name: 'item', description: 'item', price: 100};
    spyOn(component, 'createItem').and.callThrough();
    spyOn(component, 'updateItem').and.callThrough();

    component.saveItem(mockItem);

    expect(component.updateItem).toHaveBeenCalledWith(mockItem);
    expect(component.createItem).not.toHaveBeenCalled();
  });

  it('should call create from itemsService on createItem', () => {
    const mockItem: Item = {id: null, name: 'new item', description: 'new item', price: 100};
    spyOn(service, 'create').and.callThrough();

    component.createItem(mockItem);

    expect(service.create).toHaveBeenCalledWith(mockItem);
  });

  it('should call update from itemsService on updateItem', () => {
    const mockItem: Item = {id: 100, name: 'item', description: 'item', price: 100};
    spyOn(service, 'update').and.callThrough();

    component.updateItem(mockItem);

    expect(service.update).toHaveBeenCalledWith(mockItem);
  });

  it('should call delete from itemsService on deleteItem', () => {
    const mockItem: Item = {id: 100, name: 'item', description: 'item', price: 100};
    spyOn(service, 'delete').and.callThrough();

    component.deleteItem(mockItem);

    expect(service.delete).toHaveBeenCalledWith(mockItem);
  });
});
