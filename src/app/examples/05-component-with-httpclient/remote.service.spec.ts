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
    httpMock.verify();
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

    const req = httpMock.expectOne(`${BASE_URL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockWidgets);
  });

  it('should post a new widget', () => {
    const mockWidget: Widget = {id: null, name: 'new widget', description: 'new widget', price: 100};
    const results = service.create(mockWidget);

    results.subscribe(results => {});

    const req = httpMock.expectOne(`${BASE_URL}`, JSON.stringify(mockWidget));
    expect(req.request.method).toBe('POST');
    req.flush(mockWidget);
  });

  it('should put an existing widget', () => {
    const mockWidget: Widget = {id: 100, name: 'updated widget', description: 'updated widget', price: 500};
    const results = service.update(mockWidget);

    results.subscribe(results => {});

    const req = httpMock.expectOne(`${BASE_URL}${mockWidget.id}`, JSON.stringify(mockWidget));
    expect(req.request.method).toBe('PATCH');
    req.flush(mockWidget);
  });

  it('should delete an existing widget', () => {
    const mockWidget: Widget = {id: 100, name: 'updated widget', description: 'updated widget', price: 500};
    const results = service.delete(mockWidget);

    results.subscribe(results => {});

    const req = httpMock.expectOne(`${BASE_URL}${mockWidget.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockWidget);
  });

});
