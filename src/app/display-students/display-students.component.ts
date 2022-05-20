import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.sass']
})
export class DisplayStudentsComponent implements OnInit {

  @Input() student: {studentId: string, studentName: string}

  constructor() { }

  ngOnInit(): void {
  }

}
