import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CVPDF';

  color = 'rgba(60,107,177,0)';

  h = '0px';

  constructor() { }

  openCloseNavbar(){
    if (this.color === 'rgba(60,107,177,0)'){
      this.color = 'rgba(60,107,177,1)';
      setTimeout(() => { this.h = '999px'; }, 500);
    }
    else{
      setTimeout(() => { this.color = 'rgba(60,107,177,0)'; }, 500);
      this.h = '0px';
    }
  }

  ngOnInit(): void { }
}
