import { Component, OnInit } from '@angular/core';
import { customerTable, ICustomer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  public selectedCustomer!: ICustomer;
  public customers = customerTable;

  constructor() {}

  ngOnInit(): void {}
}
