import { InjectionToken } from '@angular/core';


export const WINDOW = new InjectionToken<Window>(
  'WindowToken',
  typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: () => window } : undefined
);
