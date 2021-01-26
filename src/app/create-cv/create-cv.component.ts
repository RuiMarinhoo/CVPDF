import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {F1Component} from '../allTemplates/f1/f1.component';
import {FormBuilder} from '@angular/forms';
import {CVDataService} from '../cvdata.service';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

const componentsRegistry = {
  F1: F1Component
};

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit, AfterViewInit {

  stateCreation = 0;

  imgWlayouts = 0;
  imgHlayoutsCont = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  // url = 'https://cvserverapp.herokuapp.com/generateCV/render';
  // url = 'http://localhost:3000/generateCV/render';
  // urlSafe: SafeResourceUrl;
  url;
  htmlSrc: SafeHtml;

  template = '';
  cvView = false;

  faSearch = faSearch;

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor( private componentFactory: ComponentFactoryResolver, private formBuilder: FormBuilder, private dataS: CVDataService, public sanitizer: DomSanitizer) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  async getTemplateRender(){
    this.url = await this.dataS.renderPDF(this.template, this.checkoutForm.getRawValue());
    // console.log(this.url);
    this.htmlSrc = this.sanitizer.bypassSecurityTrustHtml(this.url);
  }

  changeTemplate(template){
    this.template = template;
    this.getTemplateRender();
  }
  selectTemplate(){
    this.stateCreation = 1;
  }

  ngAfterViewInit() {
    // setTimeout(() => { this.loadComponents('F1'); }, 500);
  }

  ngOnInit(): void {
    console.log(window.innerHeight);
    this.getTemplateRender();
    const w = window.innerWidth;
    let contWidth;
    let nSlides;
    if (w < 576){
      contWidth = window.innerWidth;
      nSlides = 3;
    }
    if (w >= 576){
      contWidth = 540;
      nSlides = 2;
    }
    if (w >= 768){
      contWidth = 720;
      nSlides = 2;
    }
    if (w >= 992){
      contWidth = 960;
      nSlides = 3;
    }
    if (w >= 1200){
      contWidth = 1140;
      nSlides = 3;
    }
    console.log(contWidth);
    this.imgWlayouts = (contWidth / nSlides) - 20;
    this.imgHlayoutsCont = ((this.imgWlayouts * 842) / 595) + 60;
  }

}
