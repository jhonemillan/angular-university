import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Course;
  @Output() selectCourse = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  LocalSelectCourse(){
    console.log('click en evento local');
    this.selectCourse.emit(this.card);
  }

}
