import { Component } from '@angular/core';
import { Course } from './models/course';
import { COURSES } from './db-data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listCourses = COURSES;

  ShowAnotherMessage(){
    console.log('Message from outside');
  }

  parentSelect(){
    console.log('message from parent');
  }
}
