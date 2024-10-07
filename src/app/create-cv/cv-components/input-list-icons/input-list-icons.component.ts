import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {remix_icons} from './remix-icons';

@Component({
  selector: 'app-input-list-icons',
  templateUrl: './input-list-icons.component.html',
  styleUrls: ['./input-list-icons.component.scss']
})
export class InputListIconsComponent implements OnInit {

  @Input() input: any;
  aligns = [{
    text: 'ri-align-left',
    value: 'justify-content: start;'
  }, {
    text: 'ri-align-center',
    value: 'justify-content: center;'
  }, {
    text: 'ri-align-right',
    value: 'justify-content: end;'
  }, {
    text: 'ri-space',
    value: 'justify-content: space-between;'
  }];

  icons = remix_icons;


  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
    this.input = {
      title: 'Interests',
      align_value: 0,
      list: [{
        dropdown: false,
        value: '',
        icon: 'ri-add-line',
        show_text: true,
      }]
    };
  }

  test(){
    console.log("ABC");
  }

  addItem(){
    this.input.list.push({
      text: '',
      value: ''
    });
  }

  ngOnInit(): void {
    // margin-right: .5rem

    // flex-flow: wrap;
    // margin-bottom: .5rem
    // <div style="flex-basis: 100%;height: 0;"></div>
  }

}
