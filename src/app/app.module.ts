import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
