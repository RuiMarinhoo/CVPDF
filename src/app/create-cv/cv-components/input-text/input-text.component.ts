import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() input: any;

  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
    this.input = {
      type: 'input',
      title: 'Nome',
      value: '',
    };
  }

  ngOnInit(): void {
  }

}
