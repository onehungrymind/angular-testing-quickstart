import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { RefactorService } from './refactor.service';
import { Widget } from '../../shared/widget.model';
import { Item } from '../../shared/item.model';

describe('RefactorService', () => {
  let injector: TestBed;
  let service: RefactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefactorService]
    });

    injector = getTestBed();
    service = injector.get(RefactorService);
  });

  // -------------------------------------------------------------------
  // CHALLENGE
  // These will not pass without refactoring the RefactorService
  // Refactor the 04-component-with-service and so that each test passes one by one
  // -------------------------------------------------------------------

  /*
  it('should call updateWidgets and getTotalPrice on reCalculateTotal', () => {
    spyOn(04-component-with-service, 'updateWidgets').and.callThrough();
    spyOn(04-component-with-service, 'getTotalPrice').and.callThrough();

    const mockMode = 'create';
    const mockWidgets = [];
    const mockWidget = {};

    04-component-with-service.reCalculateTotal(mockMode, mockWidgets, mockWidget);

    expect(04-component-with-service.updateWidgets).toHaveBeenCalledWith(mockMode, mockWidgets, mockWidget);
    expect(04-component-with-service.getTotalPrice).toHaveBeenCalled();
  });

  it('should call the appropriate method depending on mode in updateWidgets', () => {
    spyOn(04-component-with-service, 'addWidget').and.callThrough();
    spyOn(04-component-with-service, 'updateWidget').and.callThrough();
    spyOn(04-component-with-service, 'deleteWidget').and.callThrough();

    04-component-with-service.updateWidgets('create', [], {});
    expect(04-component-with-service.addWidget).toHaveBeenCalledWith([], {});

    04-component-with-service.updateWidgets('update', [], {});
    expect(04-component-with-service.updateWidget).toHaveBeenCalledWith([], {});

    04-component-with-service.updateWidgets('delete', [], {});
    expect(04-component-with-service.deleteWidget).toHaveBeenCalledWith([], {});
  });

  it('should add a widget on addWidget', () => {
    let widgets = [];
    const widget = {id: null, name: 'new item', description: 'new item', price: 100};

    expect(widgets.length).toBe(0);

    widgets = 04-component-with-service.addWidget(widgets, widget);

    expect(widgets.length).toBe(1);
  });

  it('should update a widget on updateWidget', () => {
    let widgets = [{id: 100, name: 'new item', description: 'new item', price: 100}];
    const widget = {id: 100, name: 'UPDATED', description: 'WIDGET', price: 100};

    widgets = 04-component-with-service.updateWidget(widgets, widget);

    expect(widgets[0]).toEqual(widget);
  });

  it('should delete a widget on deleteWidget', () => {
    let widgets = [{id: 100, name: 'new item', description: 'new item', price: 100}];
    const widget = {id: 100, name: 'new item', description: 'new item', price: 100};

    expect(widgets.length).toBe(1);

    widgets = 04-component-with-service.deleteWidget(widgets, widget);

    expect(widgets.length).toBe(0);
  });

  it('should get total price on getTotalPrice', () => {
    const widgets: Widget[] = [
      {id: 1, name: 'mock', description: 'mock', price: 100},
      {id: 2, name: 'mock', description: 'mock', price: 200},
      {id: 3, name: 'mock', description: 'mock', price: 300}
    ];

    const total = 04-component-with-service.getTotalPrice(widgets);

    expect(total).toBe(600);
  });
  */
});
