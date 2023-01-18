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
  // filterText: string = '';
  _filterText: string = '';
  filteredStudents!: IStudent[];
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000);
  });

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }

  AddDummyStudent() {
    // let studentCopy = Object.assign([], this.students);
    // // this.students.push({
    // //   name: 'TEST',
    // //   course: 'TEST',
    // //   marks: 520,
    // //   DOB: new Date(),
    // //   gender: 'Female',
    // // });
    // studentCopy.push({
    //   name: 'TEST',
    //   course: 'TEST',
    //   marks: 520,
    //   DOB: new Date(),
    //   gender: 'Female',
    // });
    // this.students = studentCopy;
    this.students.push({
      name: 'TEST',
      course: 'TEST',
      marks: 520,
      DOB: new Date(),
      gender: 'Female',
    });
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  ChangeGender() {
    // let studentCopy: IStudent[] = Object.assign([], this.students);
    // studentCopy[0].gender = 'female';
    // this.students = studentCopy;
    this.students[0].gender = 'female';
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  onMouseMove() {}

  filterStudentByGender(filterTerm: string) {
    if (this.students.length === 0 || filterTerm === '') {
      return this.students;
    } else {
      return this.students.filter(
        (student) => student.gender.toLowerCase() === filterTerm.toLowerCase()
      );
    }
  }

  constructor(private studentService: StudentService) {}
}
