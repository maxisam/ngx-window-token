import { WINDOW, NgxWindowTokenModule } from './ngx-window-token.module';

import { TestBed, async, inject } from '@angular/core/testing';
import { Component, Inject } from '@angular/core';

describe('Service token: WINDOW', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxWindowTokenModule]
    });
  });
  it(
    'should service work',
    inject([WINDOW], window => {
      expect(window).toBeTruthy();
    })
  );
});
