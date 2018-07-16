/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';

import { ItemDetailComponent } from './item-detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Item } from '../../shared';

describe('ItemDetailComponent', () => {
  let fixture: ComponentFixture<ItemDetailComponent>;
  let de: DebugElement;
  let component: ItemDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailComponent],
      imports: [FormsModule, BrowserAnimationsModule, AppMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.item = {id: 100, name: 'item', description: 'item', price: 100};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the originalName', () => {
    component.item = {id: 100, name: 'UPDATED NAME', description: 'item', price: 100};
    expect(component.originalName).toBe('UPDATED NAME');
  });

  it('should set selectedItem when item is updated', () => {
    const newItem = {id: 200, name: 'NAME', description: 'DESC', price: 1000};
    component.item = newItem;
    expect(component.selectedItem).toEqual(newItem);
  });

  it('should raise a `cancelled` event on cancelled button click', () => {
    component.item = {id: 200, name: 'NAME', description: 'DESC', price: 1000};

    const cancelButton = de.query(By.css('button[type="button"]'));
    let cancelledItem: Item;

    component.cancelled
      .subscribe((item: Item) => cancelledItem = item);

    cancelButton.triggerEventHandler('click', null);
    expect(component.selectedItem).toBe(cancelledItem);
  });

  it('should raise a `saved` event after form submitted', () => {
    component.item = {id: 200, name: 'NAME', description: 'DESC', price: 1000};

    const form = de.query(By.css('form'));
    let savedItem: Item;

    component.saved
      .subscribe((item: Item) => savedItem = item);

    form.triggerEventHandler('submit', null);
    expect(component.selectedItem).toBe(savedItem);
  });
});
