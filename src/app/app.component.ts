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

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  constructor(private studentService: StudentService) {}
}
