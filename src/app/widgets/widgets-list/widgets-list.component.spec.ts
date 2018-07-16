/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../../app-material.module';

import { WidgetsListComponent } from './widgets-list.component';
import { By } from '@angular/platform-browser';
import { Widget } from '../../shared';

describe('WidgetsListComponent', () => {
  let fixture: ComponentFixture<WidgetsListComponent>;
  let de: DebugElement;
  let component: WidgetsListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [WidgetsListComponent],
        imports: [BrowserAnimationsModule, AppMaterialModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.widgets = [{id: 100, name: 'item', description: 'item', price: 100}];
    component.readonly = true;
    fixture.detectChanges();
  });

  it('should contain an h3 with widget name', () => {
    const widget = component.widgets[0];
    const h3 = de.query(By.css('mat-list-item h3'));

    expect(h3.nativeElement.innerText).toBe(`${widget.name}`);
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
    let selected: Widget;
    const expected = component.widgets[0];
    const li = de.query(By.css('mat-list-item'));

    component.selected
      .subscribe((widget: Widget) => selected = widget);

    li.triggerEventHandler('click', null);
    expect(selected).toBe(expected);
  });

  it('`delete` event should be raised on button click', () => {
    // Show the delete button
    component.readonly = false;
    fixture.detectChanges();

    let deletedWidget: Widget;
    const expectedWidget = component.widgets[0];
    const deleteButton = de.query(By.css('mat-list-item button'));

    component.deleted
      .subscribe((widget: Widget) => deletedWidget = widget);

    deleteButton.triggerEventHandler('click', {
        stopImmediatePropagation: () => {
      }
    });
    expect(deletedWidget).toBe(expectedWidget);
  });
});
