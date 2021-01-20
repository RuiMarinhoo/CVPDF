import {Component, Input, OnInit} from '@angular/core';
import {CVDataService} from '../../cvdata.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component implements OnInit {

  data = {
    name: 'teste',
  };

  constructor(private dataS: CVDataService) { }

  getData(){
    this.data = this.dataS.allCvData;
  }

  ngOnInit(): void {
  }

}
