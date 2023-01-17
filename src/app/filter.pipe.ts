import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from './student';

@Pipe({
  name: 'filterStudent',
  // pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(students: IStudent[], filterText: string) {
    console.log('Filter pipe colled!');
    if (students.length === 0 || filterText === '') {
      return students;
    } else {
      return students.filter(
        (student) => student.gender.toLowerCase() === filterText.toLowerCase()
      );
    }
  }
}
