import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() a='local';

  today = new Date(2018,7,17);
  pago = 100.69;

  @Output() b = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ShowMessage(){
    console.log('click metodo local')

    this.b.emit('event emit');
  }

}
