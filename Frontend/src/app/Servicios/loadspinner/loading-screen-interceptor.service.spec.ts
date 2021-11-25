import { TestBed } from '@angular/core/testing';

import { LoadingScreenInterceptor } from './loading-screen-interceptor.service';

describe('LoadingScreenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingScreenInterceptor = TestBed.get(LoadingScreenInterceptor);
    expect(service).toBeTruthy();
  });
});
