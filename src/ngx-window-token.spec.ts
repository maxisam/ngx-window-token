import { WINDOW, WindowTokenModule } from './ngx-window-token';

import { TestBed, async, inject } from '@angular/core/testing';
import { Component, Inject } from "@angular/core";

describe('Service token: WINDOW', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WindowTokenModule]
        });
    });
    it('should service work', inject([WINDOW], (window) => {
        expect(window).toBeTruthy();
    }));
});
