import { TestBed } from '@angular/core/testing';

import { EmbaucheServiceService } from './embauche-service.service';

describe('EmbaucheServiceService', () => {
  let service: EmbaucheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbaucheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
