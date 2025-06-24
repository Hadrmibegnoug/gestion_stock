import { TestBed } from '@angular/core/testing';

import { EtagereServiceService } from './etagere-service.service';

describe('EtagereServiceService', () => {
  let service: EtagereServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagereServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
