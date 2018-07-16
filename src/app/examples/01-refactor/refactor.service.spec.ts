import { getTestBed, TestBed } from '@angular/core/testing';
import { RefactorService } from './refactor.service';
import { Widget } from '../../shared/widget.model';

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

  it('should call updateWidgets and getTotalPrice on reCalculateTotal', () => {
    spyOn(service, 'updateWidgets').and.callThrough();
    spyOn(service, 'getTotalPrice').and.callThrough();

    const mockMode = 'create';
    const mockWidgets = [];
    const mockWidget = {};

    service.reCalculateTotal(mockMode, mockWidgets, mockWidget);

    expect(service.updateWidgets).toHaveBeenCalledWith(mockMode, mockWidgets, mockWidget);
    expect(service.getTotalPrice).toHaveBeenCalled();
  });

  it('should call the appropriate method depending on mode in updateWidgets', () => {
    spyOn(service, 'addWidget').and.callThrough();
    spyOn(service, 'updateWidget').and.callThrough();
    spyOn(service, 'deleteWidget').and.callThrough();

    service.updateWidgets('create', [], {});
    expect(service.addWidget).toHaveBeenCalledWith([], {});

    service.updateWidgets('update', [], {});
    expect(service.updateWidget).toHaveBeenCalledWith([], {});

    service.updateWidgets('delete', [], {});
    expect(service.deleteWidget).toHaveBeenCalledWith([], {});
  });

  it('should add a widget on addWidget', () => {
    let widgets = [];
    const widget = {id: null, name: 'new item', description: 'new item', price: 100};

    expect(widgets.length).toBe(0);

    widgets = service.addWidget(widgets, widget);

    expect(widgets.length).toBe(1);
  });

  it('should update a widget on updateWidget', () => {
    let widgets = [{id: 100, name: 'new item', description: 'new item', price: 100}];
    const widget = {id: 100, name: 'UPDATED', description: 'WIDGET', price: 100};

    widgets = service.updateWidget(widgets, widget);

    expect(widgets[0]).toEqual(widget);
  });

  it('should delete a widget on deleteWidget', () => {
    let widgets = [{id: 100, name: 'new item', description: 'new item', price: 100}];
    const widget = {id: 100, name: 'new item', description: 'new item', price: 100};

    expect(widgets.length).toBe(1);

    widgets = service.deleteWidget(widgets, widget);

    expect(widgets.length).toBe(0);
  });

  it('should get total price on getTotalPrice', () => {
    const widgets: Widget[] = [
      {id: 1, name: 'mock', description: 'mock', price: 100},
      {id: 2, name: 'mock', description: 'mock', price: 200},
      {id: 3, name: 'mock', description: 'mock', price: 300}
    ];

    const total = service.getTotalPrice(widgets);

    expect(total).toBe(600);
  });
});
