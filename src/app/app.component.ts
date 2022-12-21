import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prodac-component';

  @ViewChild('dobInput') public dateOfBirth!: ElementRef;
  @ViewChild('ageInput') public age!: ElementRef;
  @ViewChild(DemoComponent, { static: true }) public demoComp!: DemoComponent;

  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth?.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    //   console.log(this.dateOfBirth);
    //   console.log(this.age);
  }
}
