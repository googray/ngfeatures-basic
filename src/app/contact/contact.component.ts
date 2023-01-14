import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../Services/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, IDeactivateComponent {
  public firstName!: string;
  public lastName!: string;
  public country!: string;
  public subject: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ////???? what is function
  ProcessForm() {
    //Write logic to process the form
    this.router.navigate(['About']);
  }

  canExit() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm(
        'You have unsaved changes. Do you really want to discard this change?'
      );
    } else {
      return true;
    }
  }
}
