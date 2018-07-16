/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../../app-material.module';

import { ItemsListComponent } from './items-list.component';
import { By } from '@angular/platform-browser';
import { Item } from '../../shared';

describe('ItemsListComponent', () => {
  let fixture: ComponentFixture<ItemsListComponent>;
  let de: DebugElement;
  let component: ItemsListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ItemsListComponent],
        imports: [BrowserAnimationsModule, AppMaterialModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.items = [{id: 100, name: 'item', description: 'item', price: 100}];
    component.readonly = true;
    fixture.detectChanges();
  });

  it('should contain an h3 with item name', () => {
    const item = component.items[0];
    const h3 = de.query(By.css('mat-list-item h3'));

    expect(h3.nativeElement.innerText).toBe(`${item.name}`);
  });

  it('should show/hide button based on `readOnly` input', () => {
    let button = de.query(By.css('mat-list-item button'));
    expect(button).toBeNull();

    component.readonly = false;
    fixture.detectChanges();

    button = de.query(By.css('mat-list-item button'));
    expect(button).not.toBeNull();
  });

  it('`select` event should be raised on item click', () => {
    let selected: Item;
    const expected = component.items[0];
    const li = de.query(By.css('mat-list-item'));

    component.selected
      .subscribe((item: Item) => selected = item);

    li.triggerEventHandler('click', null);
    expect(selected).toBe(expected);
  });

  it('`delete` event should be raised on button click', () => {
    // Show the delete button
    component.readonly = false;
    fixture.detectChanges();

    let deletedItem: Item;
    const expectedItem = component.items[0];
    const deleteButton = de.query(By.css('mat-list-item button'));

    component.deleted
      .subscribe((item: Item) => deletedItem = item);

    deleteButton.triggerEventHandler('click', {
      stopImmediatePropagation: () => {
      }
    });
    expect(deletedItem).toBe(expectedItem);
  });
});
