import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {SafeHtmlPipe, TemplateCVComponent} from './template-cv/template-cv.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateCVComponent } from './create-cv/create-cv.component';
import { F1Component } from './allTemplates/f1/f1.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateCVComponent,
    SafeHtmlPipe,
    CreateCVComponent,
  ],
  entryComponents: [F1Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
