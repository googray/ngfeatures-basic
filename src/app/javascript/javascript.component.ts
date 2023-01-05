import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollService],
})
export class JavascriptComponent implements OnInit {
  public title = 'Javascript';

  constructor(private enrollService: EnrollService) {}
  ngOnInit(): void {}

  OnEnroll() {
    // const enrollService = new EnrollService();   //without dependency injection
    this.enrollService.OnEnrollClicked(this.title);
  }

  // OnEnroll() {
  //   alert(`Thank you for enrolling to ${this.title} course.`);
  // }
}
