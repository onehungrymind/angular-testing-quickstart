/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';

import { WidgetDetailComponent } from './widget-detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Widget } from '../../shared';

describe('WidgetDetailComponent', () => {
  let fixture: ComponentFixture<WidgetDetailComponent>;
  let de: DebugElement;
  let component: WidgetDetailComponent;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetDetailComponent],
        imports: [FormsModule, BrowserAnimationsModule, AppMaterialModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDetailComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.widget = {id: 100, name: 'item', description: 'item', price: 100};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the originalName', () => {
    component.widget = {id: 100, name: 'UPDATED NAME', description: 'item', price: 100};
    expect(component.originalName).toBe('UPDATED NAME');
  });

  it('should set selectedWidget when widget is updated', () => {
    const newWidget = {id: 200, name: 'NAME', description: 'DESC', price: 1000};
    component.widget = newWidget;
    expect(component.selectedWidget).toEqual(newWidget);
  });

  it('should raise a `cancelled` event on cancelled button click', () => {
    component.widget = {id: 200, name: 'NAME', description: 'DESC', price: 1000};

    const cancelButton = de.query(By.css('button[type="button"]'));
    let cancelledWidget: Widget;

    component.cancelled
      .subscribe((widget: Widget) => cancelledWidget = widget);

    cancelButton.triggerEventHandler('click', null);
    expect(component.selectedWidget).toBe(cancelledWidget);
  });

  it('should raise a `saved` event after form submitted', () => {
    component.widget = {id: 200, name: 'NAME', description: 'DESC', price: 1000};

    const form = de.query(By.css('form'));
    let savedWidget: Widget;

    component.saved
      .subscribe((widget: Widget) => savedWidget = widget);

    form.triggerEventHandler('submit', null);
    expect(component.selectedWidget).toBe(savedWidget);
  });
});
