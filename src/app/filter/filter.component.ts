import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input('total') public all: number = 0;
  @Input() public free: number = 0;
  @Input() public premium: number = 0;

  public selectedRadioButtonValue: string = 'All';

  @Output()
  public filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log('cl: ', this.selectedRadioButtonValue);
  }

  constructor() {}

  ngOnInit(): void {}
}
