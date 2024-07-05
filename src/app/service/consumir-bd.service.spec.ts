import { TestBed } from '@angular/core/testing';

import { ConsumirBDService } from './consumir-bd.service';

describe('ConsumirBDService', () => {
  let service: ConsumirBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumirBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
