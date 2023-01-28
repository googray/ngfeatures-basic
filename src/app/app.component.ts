import { Component, OnInit } from '@angular/core';

import { IProductCreate } from './model/products';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prodac-component';
  allProducts: IProductCreate[] = [];
  isFetching: boolean = false;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(products: IProductCreate) {
    this.productService.createProduct(products);
  }

  private fetchProducts() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.isFetching = false;
      console.log(products);
      this.allProducts = products;
    });
  }

  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }
  onDeleteAllProducts() {
    this.productService.deleteAllProducts();
  }
}
