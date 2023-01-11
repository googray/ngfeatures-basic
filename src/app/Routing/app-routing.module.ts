import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CourseComponent } from '../courses/course/course.component';
import { CoursesComponent } from '../courses/courses.component';
import { ErrorComponent } from '../error/error.component';
import { HomeComponent } from '../home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  // {
  //   path: '',
  //   children: [
  //     { path: 'Course/:id', component: CourseComponent },
  //     { path: 'Course/:name', component: CourseComponent },
  //   ],
  // },
  { path: 'Course/:id', component: CourseComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
