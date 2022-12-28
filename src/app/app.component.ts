import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prodac-component';

  public inputText: string = '';
  public destroy: boolean = true;

  OnSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }

  DestroyComponent() {
    this.destroy = false;
  }
}
