import { Component, OnInit } from '@angular/core';
import { Iproducts, products } from '../shared/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: Iproducts[] = products;

  constructor() {}

  ngOnInit(): void {}
}
