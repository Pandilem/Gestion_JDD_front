import { TestBed } from '@angular/core/testing';

import { RechercherService } from './rechercher.service';

describe('RechercherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RechercherService = TestBed.get(RechercherService);
    expect(service).toBeTruthy();
  });
});
