import { Component } from '@angular/core';
import { IStudent } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService],
})
export class AppComponent {
  title = 'prodac-component';

  students!: IStudent[];
  totalMarks!: number;
  filterText: string = '';

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  AddDummyStudent() {
    let studentCopy = Object.assign([], this.students);
    // this.students.push({
    //   name: 'TEST',
    //   course: 'TEST',
    //   marks: 520,
    //   DOB: new Date(),
    //   gender: 'Female',
    // });
    studentCopy.push({
      name: 'TEST',
      course: 'TEST',
      marks: 520,
      DOB: new Date(),
      gender: 'Female',
    });
    this.students = studentCopy;
  }

  ChangeGender() {
    let studentCopy: IStudent[] = Object.assign([], this.students);
    studentCopy[0].gender = 'female';
    this.students = studentCopy;
  }

  constructor(private studentService: StudentService) {}
}
