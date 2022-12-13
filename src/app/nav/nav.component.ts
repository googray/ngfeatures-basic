import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-nav',
  // selector: '[app-nav]', //like atribute
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public siteName: string = 'eShopping';
  constructor() {}

  ngOnInit(): void {}
}
