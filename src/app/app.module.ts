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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragScrollModule} from 'ngx-drag-scroll';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {ImageCropperModule} from 'ngx-image-cropper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { InputPhotoComponent } from './create-cv/cv-components/input-photo/input-photo.component';
import { InputTextComponent } from './create-cv/cv-components/input-text/input-text.component';
import { InputListSkillsComponent } from './create-cv/cv-components/input-list-skills/input-list-skills.component';
import {InputListTopicsComponent} from './create-cv/cv-components/input-list-topics/input-list-topics.component';
import {InputListIconsComponent} from './create-cv/cv-components/input-list-icons/input-list-icons.component';

import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateCVComponent,
    SafeHtmlPipe,
    CreateCVComponent,
    InputPhotoComponent,
    InputTextComponent,
    InputListSkillsComponent,
    InputListTopicsComponent,
    InputListIconsComponent
  ],
  entryComponents: [F1Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragScrollModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    ImageCropperModule,
    MatSlideToggleModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
