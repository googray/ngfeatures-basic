import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductCreate } from '../model/products';
import { catchError, map, throwError } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  error = new Subject<string>();
  //Create product in database
  createProduct(products: IProductCreate) {
    console.log(products);
    const hHeaders = new HttpHeaders({ myHeader: 'graygoo' });
    this.http
      .post<{ name: string }>(
        'https://ngfeatures-general-concepts-default-rtdb.firebaseio.com/product.json',
        products,
        { headers: hHeaders }
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          this.error.next(err.message);
        }
      );
  }

  //fetch products from DB
  fetchProduct() {
    const header = new HttpHeaders()
      .set('content-type', 'aplication/json')
      .set('Access-Control-Allow-Origin', '*');

    const params = new HttpParams().set('print', 'pretty').set('pageNum', 1);
    return this.http
      .get<{ [key: string]: IProductCreate }>( //IProductCreate
        'https://ngfeatures-general-concepts-default-rtdb.firebaseio.com/product.json',
        { headers: header, params: params }
      )
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            // console.log('key: ', key);
            // console.log('res: ', res);
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        }),
        catchError((err) => {
          //write the logic for logging error
          return throwError(err);
        })
      );
  }

  //delete products from DB
  deleteProduct(id: string) {
    let header = new HttpHeaders();
    header = header.append('myHeader1', 'Value1');
    header = header.append('myHeader2', 'Value2');

    this.http
      .delete(
        'https://ngfeatures-general-concepts-default-rtdb.firebaseio.com/product/' +
          id +
          '.json',
        { headers: header }
      )
      .subscribe();
  }

  //delete All products from DB
  deleteAllProducts() {
    this.http
      .delete(
        'https://ngfeatures-general-concepts-default-rtdb.firebaseio.com/product.json'
      )
      .subscribe();
  }

  updateProduct(id: string, value: IProductCreate) {
    this.http
      .put(
        'https://ngfeatures-general-concepts-default-rtdb.firebaseio.com/product/' +
          id +
          '.json',
        value
      )
      .subscribe();
  }

  constructor(private http: HttpClient) {}
}
