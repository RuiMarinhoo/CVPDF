import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-list-topics',
  templateUrl: './input-list-topics.component.html',
  styleUrls: ['./input-list-topics.component.scss']
})
export class InputListTopicsComponent implements OnInit {

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

  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
    this.input = {
      title: 'Professional Experience',
      align_value: 0,
      list: [{
        text: '',
        value: '',
        align_value: 0,
        break_value: false,
        dot_value: false
      }]
    };
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
