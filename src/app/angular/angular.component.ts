import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService],
})
export class AngularComponent implements OnInit {
  public title = 'Angular';
  constructor(private enrollService: EnrollService) {}
  ngOnInit(): void {}

  OnEnroll() {
    // const enrollService = new EnrollService(); //without dependency injection
    this.enrollService.OnEnrollClicked(this.title);
  }

  // OnEnroll() {
  //   alert(`Thank you for enrolling to ${this.title} course.`);
  // }
}
