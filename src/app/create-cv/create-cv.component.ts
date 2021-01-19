import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit {

  @ViewChild('apptemplate') child;

  constructor() { }

  change(){
    this.child.change();
  }

  ngOnInit(): void {
  }

}
