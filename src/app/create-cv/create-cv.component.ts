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
import { faSearch, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {LayoutService} from './templates/layout.service';
import {loadConfigurationFromPath} from 'tslint/lib/configuration';
import {ImageCroppedEvent} from 'ngx-image-cropper';

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

  // template = '';
  template = 'f1';
  cvView = false;

  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faTimes = faTimes;

  panelOpenState = false;
  toAdd = [];

  imageChangedEvent: any = '';
  croppedImage: any = '';
  onCV: any = [];

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private formBuilder: FormBuilder,
    private dataS: CVDataService,
    public sanitizer: DomSanitizer,
    private layout: LayoutService) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  noReturnPredicate() {
    return false;
  }

  addToCV(item){
    if (!this.onCV.includes(item)){
      if (['Foto'].includes(item)){
        this.onCV.push({control: item, value: '', position: false});
      }
      else if (['Nome', 'Morada', 'Contacto', 'E-mail', 'Perfil'].includes(item)){
        this.onCV.push({control: item, value: '', position: false});
      }
      else if (['Linguas', 'Skills'].includes(item)){
        this.onCV.push({control: item, value: [], position: false});
      }
      else if (['Personalidade', 'Certificados'].includes(item)){
        this.onCV.push({control: item, value: [], position: false});
      }
      else if (['Hobbies'].includes(item)){
        this.onCV.push({control: item, value: [], position: false});
      }
      else if (['Educacao', 'Experiencia'].includes(item)){
        this.onCV.push({control: item, value: [], position: false});
      }
    }
    // console.log(this.onCV);
    this.getTemplateRender();
  }
  removeToCV(item){
    this.onCV.splice(item, 1);
  }

  loadLists(){
    const vars: any = this.layout.getVariaveis(this.template);
    vars.forEach( val => {
      this.toAdd.push(val);
    });
  }

  addItem(i){
    console.log(i);
    if (['Linguas', 'Skills'].includes(this.onCV[i].control)){
      this.onCV[i].value.push({tipo: '', value: ''});
    }
    else if (['Personalidade', 'Hobbies', 'Certificados'].includes(this.onCV[i].control)){
      this.onCV[i].value.push({value: ''});
    }
    else if (['Educacao', 'Experiencia'].includes(this.onCV[i].control)){
      this.onCV[i].value.push({data: '', local: '', texto: ''});
    }
  }
  removeItem(item){
    this.onCV.splice(item, 1);
  }

  onInputChange(value, index){
    console.log(value);
    this.onCV[index].value = value;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    const index = this.onCV.findIndex(x => x.control === 'Foto');
    this.onCV[index].value = event.base64;
    this.getTemplateRender();
  }
  imageLoaded(image: HTMLImageElement) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  async getTemplateRender(){
    console.log(this.onCV);
    const html = this.layout.getHTML(this.onCV);
    this.url = await this.dataS.renderPDF(this.template, html);
    // console.log(this.url);
    this.htmlSrc = this.sanitizer.bypassSecurityTrustHtml(this.url);
  }

  sendToPDF(){
    const html = this.layout.getHTML(this.onCV);
    console.log(html);
  }

  changeTemplate(template){
    this.template = template;
    this.getTemplateRender();
  }
  selectTemplate(){
    this.stateCreation = 1;
  }

  itemOnCV(item){
    return this.onCV.some(val => val.control === item);
  }

  ngAfterViewInit() {
    // setTimeout(() => { this.loadComponents('F1'); }, 500);
  }

  ngOnInit(): void {
    console.log(window.innerHeight);
    this.getTemplateRender();
    this.loadLists();
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
