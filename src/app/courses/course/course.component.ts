import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, OnDestroy {
  constructor(
    private service: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public course: any;
  public courseId: any;
  public RouteParamObs: any;
  public editMode: boolean = false;

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // //this.courseId = this.route.snapshot.params['name'];
    // this.course = this.service.courses.find((x) => x.id == this.courseId);

    this.RouteParamObs = this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find((x) => x.id == this.courseId);
    });

    // //snapshot
    // this.editMode = Boolean(this.route.snapshot.queryParamMap.get('edit'));
    // console.log(this.editMode); //not return any data
    //Observable
    this.route.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });
  }

  ngOnDestroy() {
    this.RouteParamObs.unsubscribe();
  }

  appendQueryParam() {
    this.router.navigate(['/Course', this.courseId], {
      queryParams: { edit: true },
    });
  }
}
