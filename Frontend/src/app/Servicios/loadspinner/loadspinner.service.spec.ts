import { TestBed } from '@angular/core/testing';

import { LoadspinnerService } from './loadspinner.service';

describe('LoadspinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadspinnerService = TestBed.get(LoadspinnerService);
    expect(service).toBeTruthy();
  });
});
