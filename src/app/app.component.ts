import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  students = [{studentId: '001', studentName: 'cisco'}]

  title = 'rest-starter-client';

  submitStudent(eventData: {studentId: string, studentName: string}){
    this.students.push(eventData)
  }
}
