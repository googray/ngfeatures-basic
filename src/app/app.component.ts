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

  setDefaultValues() {
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'Smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com',
    //   },
    // });
    this.form.form.patchValue({
      personDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com',
      },
    });
  }

  ngOnChanges(): void {}
}
