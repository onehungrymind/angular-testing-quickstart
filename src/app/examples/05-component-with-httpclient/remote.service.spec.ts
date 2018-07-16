import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RemoteService } from './remote.service';

const BASE_URL = 'http://localhost:3000/widgets/';

interface Widget {
  id: number;
  name: string;
  price: number;
  description?: string;
}

describe('RemoteService', () => {
  let injector: TestBed;
  let service: RemoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemoteService]
    });

    injector = getTestBed();
    service = injector.get(RemoteService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    // How do you verify there are no outstanding requests?
  });

  it('should fetch all widgets', () => {
    const mockWidgets: Widget[] = [
      {id: 1, name: 'mock', description: 'mock', price: 100},
      {id: 2, name: 'mock', description: 'mock', price: 100},
      {id: 3, name: 'mock', description: 'mock', price: 100}
    ];
    const results = service.all();

    results
      .subscribe((widgets: Widget[]) => {
        expect(widgets.length).toBe(3);
        expect(widgets).toEqual(mockWidgets);
      });


    // How do you assert you expect a single call to the service?
    // How would you assert the request method?
    // How would you force a payload through the request?
  });

  it('should post a new widget', () => {
    const mockWidget: Widget = {id: null, name: 'new widget', description: 'new widget', price: 100};
    const results = service.create(mockWidget);

    results.subscribe(results => {});

    // How do you assert you expect a single call to the service?
    // How would you assert the request method?
    // How would you force a payload through the request?
  });

  it('should put an existing widget', () => {
    const mockWidget: Widget = {id: 100, name: 'updated widget', description: 'updated widget', price: 500};
    const results = service.update(mockWidget);

    results.subscribe(results => {});

    // How do you assert you expect a single call to the service?
    // How would you assert the request method?
    // How would you force a payload through the request?
  });

  it('should delete an existing widget', () => {
    const mockWidget: Widget = {id: 100, name: 'updated widget', description: 'updated widget', price: 500};
    const results = service.delete(mockWidget);

    results.subscribe(results => {});

    // How do you assert you expect a single call to the service?
    // How would you assert the request method?
    // How would you force a payload through the request?
  });

});
