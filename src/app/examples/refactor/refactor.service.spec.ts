import { TestBed, inject } from '@angular/core/testing';

import { RefactorService } from './refactor.service';

describe('RefactorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefactorService]
    });
  });

  it('should be created', inject([RefactorService], (service: RefactorService) => {
    expect(service).toBeTruthy();
  }));
});
