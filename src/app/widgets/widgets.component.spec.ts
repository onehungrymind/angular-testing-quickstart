/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { of } from 'rxjs/internal/observable/of';
import { noop } from 'rxjs/internal-compatibility';

import { Widget, WidgetsService } from '../shared';
import { WidgetsComponent } from './widgets.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';
import { DebugElement } from '@angular/core';

class WidgetsServiceStub {
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

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;
  let debugElement: DebugElement;
  let service: WidgetsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetsComponent,
        WidgetsListComponent,
        WidgetDetailComponent
      ],
      providers: [
        {provide: WidgetsService, useClass: WidgetsServiceStub}
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
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(WidgetsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getWidgets and resetCurrentWidget on init', () => {
    spyOn(component, 'getWidgets');
    spyOn(component, 'resetCurrentWidget');

    component.ngOnInit();

    expect(component.getWidgets).toHaveBeenCalled();
    expect(component.resetCurrentWidget).toHaveBeenCalled();
  });

  it('should reset the current widget on resetCurrentWidget', () => {
    const defaultWidget = {id: null, name: '', price: 0, description: ''};
    component.resetCurrentWidget();
    component.currentWidget.price = 1000;
    expect(component.currentWidget.price).toBe(1000);

    component.resetCurrentWidget();
    expect(component.currentWidget.price).toBe(0);
    expect(component.currentWidget).toEqual(defaultWidget);
  });

  it('should call reset the current widget on cancel', () => {
    spyOn(component, 'resetCurrentWidget');

    component.cancel({});

    expect(component.resetCurrentWidget).toHaveBeenCalled();
  });

  it('should set the current widget on selectWidget', () => {
    const mockWidget: Widget = {id: null, name: 'new item', description: 'new item', price: 100};

    component.selectWidget(mockWidget);

    expect(component.currentWidget).toEqual(mockWidget);
  });

  it('should call all from widgetsService on getWidgets', () => {
    spyOn(service, 'all').and.callThrough();

    component.getWidgets();

    expect(service.all).toHaveBeenCalled();
  });

  it('should call createWidget if widget DOES NOT have an id on saveWidget', () => {
    const mockWidget: Widget = {id: null, name: 'new item', description: 'new item', price: 100};
    spyOn(component, 'createWidget').and.callThrough();
    spyOn(component, 'updateWidget').and.callThrough();

    component.saveWidget(mockWidget);

    expect(component.createWidget).toHaveBeenCalledWith(mockWidget);
    expect(component.updateWidget).not.toHaveBeenCalled();
  });

  it('should call updateWidget if widget DOES have an id on saveWidget', () => {
    const mockWidget: Widget = {id: 100, name: 'item', description: 'item', price: 100};
    spyOn(component, 'createWidget').and.callThrough();
    spyOn(component, 'updateWidget').and.callThrough();

    component.saveWidget(mockWidget);

    expect(component.updateWidget).toHaveBeenCalledWith(mockWidget);
    expect(component.createWidget).not.toHaveBeenCalled();
  });

  it('should call create from widgetsService on createWidget', () => {
    const mockWidget: Widget = {id: null, name: 'item', description: 'item', price: 100};
    spyOn(service, 'create').and.callThrough();

    component.createWidget(mockWidget);

    expect(service.create).toHaveBeenCalledWith(mockWidget);
  });

  it('should call update from widgetsService on updateWidget', () => {
    const mockWidget: Widget = {id: 100, name: 'item', description: 'item', price: 100};
    spyOn(service, 'update').and.callThrough();

    component.updateWidget(mockWidget);

    expect(service.update).toHaveBeenCalledWith(mockWidget);
  });

  it('should call delete from widgetsService on deleteWidget', () => {
    const mockWidget: Widget = {id: 100, name: 'item', description: 'item', price: 100};
    spyOn(service, 'delete').and.callThrough();

    component.deleteWidget(mockWidget);

    expect(service.delete).toHaveBeenCalledWith(mockWidget);
  });
});
