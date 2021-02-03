import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
