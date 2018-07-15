/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ItemsService } from './items.service';
import { Item } from './item.model';

const BASE_URL = 'http://localhost:3000/items/';

describe('Service: Items', () => {
  let injector: TestBed;
  let service: ItemsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemsService]
    });

    injector = getTestBed();
    service = injector.get(ItemsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  it('#all should fetch all items', () => {
    const mockItems: Item[] = [
      {id: 1, name: 'mock', description: 'mock', price: 100},
      {id: 2, name: 'mock', description: 'mock', price: 100},
      {id: 3, name: 'mock', description: 'mock', price: 100}
    ];

    const results = service.all();
    results
      .subscribe((items: Item[]) => {
        expect(items.length).toBe(3);
        expect(items).toEqual(mockItems);
      });

    const req = httpMock.expectOne(`${BASE_URL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('#create should post a new item', () => {
    const mockItem: Item = {id: null, name: 'new item', description: 'new item', price: 100};

    const results = service.create(mockItem);
    results
      .subscribe(res => {
        // perform additional asserts as necessary
      });

    const req = httpMock.expectOne(`${BASE_URL}`, JSON.stringify(mockItem));
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('#update should put an existing item', () => {
    const mockItem: Item = {id: 100, name: 'updated item', description: 'updated item', price: 500};

    const results = service.update(mockItem);
    results
      .subscribe(res => {
        // perform additional asserts as necessary
      });

    const req = httpMock.expectOne(`${BASE_URL}${mockItem.id}`, JSON.stringify(mockItem));
    expect(req.request.method).toBe('PATCH');
    req.flush(mockItem);
  });

  it('#delete should delete an existing item', () => {
    const mockItem: Item = {id: 100, name: 'updated item', description: 'updated item', price: 500};

    const results = service.delete(mockItem);
    results
      .subscribe(res => {
        // perform additional asserts as necessary
      });

    const req = httpMock.expectOne(`${BASE_URL}${mockItem.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockItem);
  });
});
