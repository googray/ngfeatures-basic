import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public slogan: string = 'You one stop shop for everything.';
  public sourceImg: string = '/assets/shopping.jpg';
  constructor() {}

  ngOnInit(): void {}
  setSlogan() {
    return 'This is a new slogan for this application';
  }
}
