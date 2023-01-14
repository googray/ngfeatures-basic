import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolveService implements Resolve<any> {
  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.coursesService.getAllCourses().then((data) => {
      return data;
    });
  }
}
