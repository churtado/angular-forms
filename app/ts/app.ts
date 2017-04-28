//http://localhost:8080/webpack-dev-server/index.html

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  declarations: [
    //FormsDemoApp,
    //DemoFormSku,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ /*FormsDemoApp*/ ]
})
class FormsDemoAppModule {}