/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ItemsService } from './items.service';

class HttpClientStub {}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: HttpClient, useClass: HttpClientStub}
      ]
    });
  });

  it('should exist', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
