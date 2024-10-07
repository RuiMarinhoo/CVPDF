import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface Item {
  title: string;
  align_value: number;
  list: ItemList[];
}
interface ItemList {
  text: string;
  value: string;
  align_value: number;
  break_value: boolean;
  dots_value: boolean;
}

@Component({
  selector: 'app-input-list-skills',
  templateUrl: './input-list-skills.component.html',
  styleUrls: ['./input-list-skills.component.scss']
})
export class InputListSkillsComponent implements OnInit {

  @Input() input: Item;
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
      title: 'Linguas',
      align_value: 0,
      list: [{
        text: '',
        value: '',
        align_value: 0,
        break_value: false,
        dots_value: true
      }]
    };
  }

  addItem(){
    this.input.list.push({
      text: '',
      value: '',
      align_value: 0,
      break_value: false,
      dots_value: true
    });
  }

  ngOnInit(): void {
    // margin-right: .5rem

    // flex-flow: wrap;
    // margin-bottom: .5rem
    // <div style="flex-basis: 100%;height: 0;"></div>
  }

}
