import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CourseComponent } from '../courses/course/course.component';
import { CoursesComponent } from '../courses/courses.component';
import { ErrorComponent } from '../error/error.component';
import { HomeComponent } from '../home/home.component';
import { CanDeactivateGuardService } from '../Services/candeactivate-guard.service';
import { CourseGuardService } from '../Services/course-guard.service';
import { CourseResolveService } from '../Services/course-resolve.service';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  {
    path: 'Contact',
    component: ContactComponent,
    canDeactivate: [CanDeactivateGuardService],
  },
  // {
  //   path: 'Courses',
  //   component: CoursesComponent,
  //   canActivate: [CourseGuardService],
  // },
  {
    path: 'Courses',
    component: CoursesComponent,
    resolve: { courses: CourseResolveService },
  },
  {
    path: '',
    canActivateChild: [CourseGuardService],
    children: [
      {
        path: 'Course/:id',
        component: CourseComponent,
      },
      // { path: 'Course/:name', component: CourseComponent },
    ],
  },
  // { path: 'Course/:id', component: CourseComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
