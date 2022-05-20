import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-submit-student',
  templateUrl: './submit-student.component.html',
  styleUrls: ['./submit-student.component.sass']
})
export class SubmitStudentComponent implements OnInit {

  studentId: string 

  studentName: string

  @Output() saveStudent = new EventEmitter<{studentId: string, studentName: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.saveStudent.emit({
      studentId: this.studentId,
      studentName: this.studentName
    })
    this.studentId = ''
    this.studentName = ''
  }
}
