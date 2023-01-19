import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'prodac-component';
  defaultCountry = 'india';
  firstname!: string;
  lastname!: string;
  defaultGender = 'Male';

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];

  @ViewChild('myForm') form!: NgForm;

  onSubmit() {
    console.log(this.form);
  }

  ngOnChanges(): void {}
}
