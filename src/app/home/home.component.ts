import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  writeOpacity = 1;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.writeOpacity === 0){
        this.writeOpacity = 1;
      }
      else{
        this.writeOpacity = 0;
      }
    }, 500);
  }

}
