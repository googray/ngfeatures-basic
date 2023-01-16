import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from './student';

@Pipe({
  name: 'filterStudent',
})
export class FilterPipe implements PipeTransform {
  transform(students: IStudent[], filterText: string) {
    if (students.length === 0 || filterText === '') {
      return students;
    } else {
      return students.filter(
        (student) => student.gender.toLowerCase() === filterText.toLowerCase()
      );
    }
  }
}
