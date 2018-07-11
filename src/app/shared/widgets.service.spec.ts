/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { WidgetsService } from './widgets.service';

class HttpClientStub {}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetsService,
        {provide: HttpClient, useClass: HttpClientStub}
      ]
    });
  });

  it('should exist', inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
