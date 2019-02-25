import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module'

@NgModule({
  declarations: [ //Componentes, directivas y pipes
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [], //servicios y modelos
  bootstrap: [AppComponent]
})
export class AppModule { }
