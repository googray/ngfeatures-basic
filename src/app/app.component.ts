import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prodac-component';

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
          this.noSpaceAllowed,
        ]),
        lastname: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          this.noSpaceAllowed,
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.emailNotAllowed
        ),
      }),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
      ]),
    });
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  //custom async validator
  emailNotAllowed(control: FormControl): Promise<any> | Observable<any> {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'procademy@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return response;
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
