import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxWindowTokenModule } from '../../projects/ngx-window-token/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWindowTokenModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
