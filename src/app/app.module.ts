import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './Routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CourseGuardService } from './Services/course-guard.service';
import { AuthService } from './Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService, CourseGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
