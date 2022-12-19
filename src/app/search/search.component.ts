import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public enteredSearchValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  @Output()
  public searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
