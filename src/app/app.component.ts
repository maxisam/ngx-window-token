import { Component, Inject } from '@angular/core';
import { WINDOW } from 'ngx-window-token';

// import { WINDOW } from '@local/ngx-window-token';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	useragent: string;
	constructor(@Inject(WINDOW) _window: any) {
		this.useragent = `${_window.navigator.userAgent}, `;
	}
	title = 'ngx window token';
}
