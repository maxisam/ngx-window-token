import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window | undefined>(
  'WindowToken',
  typeof window !== 'undefined' && window.document
    ? { providedIn: 'root', factory: () => window }
    : { providedIn: 'root', factory: () => undefined }
);
