import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ViewEncapsulation,
  ComponentFactoryResolver,
  AfterViewInit,
  AfterContentChecked, Pipe, PipeTransform
} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

const teste = './template-cv.component.html';

@Component({
  selector: 'app-template-cv',
  // templateUrl: teste
  // templateUrl: './template-cv.component.html',
  // styleUrls: ['./template-cv.component.css'],
  // template: `<h1>TESTE</h1><ng-container #vc></ng-container>`
  template: `<div #div [innerHTML]="myTemplate | safeHtml"></div>`,
  // template: `<div [innerHtml]="myTemplate"></div>`
  encapsulation: ViewEncapsulation.None,
})

export class TemplateCVComponent implements OnInit {

  // myTemplate: any = 'assets/img/F1.html';
  myTemplate: any = '';
  teste = 'abc';

  constructor(private http: HttpClient, private componentFactoryResolver: ComponentFactoryResolver) {
    this.loadHTML('F1');
  }

  loadHTML(html){
    const headersUrl: HttpHeaders = new HttpHeaders();
    const thisUrl = 'assets/img/' + html + '.html';

    this.http
      .get(thisUrl , { headers: headersUrl, responseType: 'text' })
      .toPromise()
      .then(resp => resp)
      .catch(error => console.log(error)).then( val => { this.myTemplate = val; console.log(val); });
  }

  change(){
    this.loadHTML('F2');
  }

  ngOnInit(): void { }

}
