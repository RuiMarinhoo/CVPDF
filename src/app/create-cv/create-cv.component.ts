import {AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {F1Component} from '../allTemplates/f1/f1.component';
import {FormBuilder} from '@angular/forms';
import {CVDataService} from '../cvdata.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

const componentsRegistry = {
  F1: F1Component
};

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit, AfterViewInit {

  @ViewChild('cv', {read: ViewContainerRef}) content: ViewContainerRef;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  template;

  constructor( private componentFactory: ComponentFactoryResolver, private formBuilder: FormBuilder, private dataS: CVDataService) { }

  changeData(){
    console.log(this.checkoutForm.getRawValue());
    this.dataS.setData(this.checkoutForm.getRawValue());
    this.template.instance.getData();
  }

  captureScreen() {
    const data = document.getElementById('page');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      pdf.internal.scaleFactor = 30;
      const position = 0;
      console.log(contentDataURL);
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

  ngAfterViewInit() {
    setTimeout(() => { this.loadComponents('F1'); }, 500);
  }

  loadComponents(componentName) {
    // Fetch components to display from the backend.
    // const components = [
    //   { componentName: 'F1' }
    // ];
    // Insert...
    let componentClass;
    let componentFactory;
    // for (const c of components) {
    //   // Get the actual class for the current component.
    //   componentClass = componentsRegistry[c.componentName];
    //   // Get a factory for the current component.
    //   componentFactory = this.componentFactory.resolveComponentFactory(componentClass);
    //   // Insert the component at the anchor point.
    //   this.content.createComponent(componentFactory);
    // }

    componentClass = componentsRegistry[componentName];
    componentFactory = this.componentFactory.resolveComponentFactory(componentClass);
    this.template = this.content.createComponent(componentFactory);

  }

  ngOnInit(): void {
  }

}
