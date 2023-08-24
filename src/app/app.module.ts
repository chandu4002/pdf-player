import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { SunbirdPdfPlayerModule } from 'dic-pdf-player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SunbirdPdfPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
