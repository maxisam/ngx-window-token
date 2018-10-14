import { Component, Inject } from '@angular/core';
import { WINDOW } from '../../projects/ngx-window-token/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useragent: string;
  constructor(@Inject(WINDOW) _window) {
    this.useragent = `${_window.navigator.userAgent}, `;
  }
  title = 'ngx window token';
}
