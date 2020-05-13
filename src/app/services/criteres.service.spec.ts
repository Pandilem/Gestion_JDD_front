import { TestBed } from '@angular/core/testing';

import { CriteresService } from './criteres.service';

describe('CriteresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriteresService = TestBed.get(CriteresService);
    expect(service).toBeTruthy();
  });
});
