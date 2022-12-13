import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html',
  // styleUrls: ['./notification.component.css']
  template: `<div
    class="alert alert-success notification-container"
    [hidden]="displayNotification"
  >
    <p>This website uses cookies to provide better user experience.</p>
  </div>`,
  styles: [
    '.notification-container {margin:10px 0px; padding: 10px 20px; text-align: center}',
    'p{font-size:14px}',
  ],
})
export class NotificationComponent implements OnInit {
  public displayNotification: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
