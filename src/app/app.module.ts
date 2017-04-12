import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { CountDown } from 'angular2-simple-countdown/countdown';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
