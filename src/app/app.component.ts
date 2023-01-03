import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prodac-component';

  public active: boolean = false;
  public display: boolean = false;

  DisplayNotice() {
    this.display = !this.display;
  }
}
