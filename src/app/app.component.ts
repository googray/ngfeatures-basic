import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

export interface IProductCreate {
  pName: string;
  desc: string;
  price: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prodac-component';

  constructor(private http: HttpClient) {}

  onProductCreate(products: IProductCreate) {
    console.log(products);
    const hHeaders = new HttpHeaders({ myHeader: 'graygoo' });
    this.http
      .post(
        'https://ngfeatures-general-concepts-default-rtdb.firebaseio.com/product.json',
        products,
        { headers: hHeaders }
      )
      .subscribe((res) => console.log(res));
  }
}
