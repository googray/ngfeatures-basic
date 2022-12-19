import { Component, OnInit } from '@angular/core';
import { coursesList, Icourses } from 'src/assets/coursesList';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  public courses: Icourses[] = coursesList;
  public courseCountRadioButton: string = 'All';
  public searchText: string = '';

  constructor() {}

  ngOnInit(): void {}

  getTotalCourses() {
    return this.courses.length;
  }
  getTotalFreeCourses() {
    return this.courses.filter((el) => el.type === 'Free').length;
  }
  getTotalPremiumCourses() {
    return this.courses.filter((el) => el.type === 'Premium').length;
  }

  onFilterRadioButtonChange(data: string) {
    this.courseCountRadioButton = data;
    // console.log('CC: ', this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log('ST: ', this.searchText);
  }
}
