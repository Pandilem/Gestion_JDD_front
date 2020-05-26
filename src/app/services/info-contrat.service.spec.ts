import { TestBed } from '@angular/core/testing';

import { InfoContratService } from './info-contrat.service';

describe('InfoContratService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoContratService = TestBed.get(InfoContratService);
    expect(service).toBeTruthy();
  });
});
