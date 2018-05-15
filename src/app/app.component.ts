import { Component, Inject } from '@angular/core';
import { WINDOW } from '../../projects/ngx-window-token/src/lib/ngx-window-token.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useragent: string;
  constructor(@Inject(WINDOW) _window) {
    this.useragent = `User Agent: ${_window.navigator.userAgent}, `;
  }
  title = 'ngx window token';
}
