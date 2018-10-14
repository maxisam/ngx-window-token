import { WINDOW } from './window';

import { TestBed, inject } from '@angular/core/testing';

describe('Service token: WINDOW', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
  });
  it(
    'should service work',
    inject([WINDOW], window => {
      expect(window).toBeTruthy();
    })
  );
});
