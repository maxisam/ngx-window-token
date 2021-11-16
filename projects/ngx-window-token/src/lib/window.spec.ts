import { inject, TestBed } from '@angular/core/testing';
import { WINDOW } from './window';


describe('Service token: WINDOW', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
  });
  it('should service work', inject([WINDOW], (window:Window) => {
    expect(window).toBeTruthy();
  }));
});
