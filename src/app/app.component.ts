import { Component, OnInit } from '@angular/core';
import { FormRecord } from '@angular/forms';
import { filter, from, map, Observable, of } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[DataService]
})
export class AppComponent implements OnInit {
  title = 'prodac-component';

  constructor(private dataService: DataService) {}

  // USING OBSERVABLE CONSTRUCTOR
  // public myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something went wrong! Please try again later'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  //   // observer.next('1');
  //   // observer.next('2');
  //   // observer.next('3');
  //   // observer.next('4');
  //   // observer.next('5');
  //   console.log('Observable ends');
  // });

  //USING CREATE METHODE
  // public myObservable = Observable.create((observer: any) => {
  //   setTimeout(() => {
  //     observer.next('A');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('B');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('C');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('D');
  //   }, 4000);
  //   //   setTimeout(() => {
  //   //    observer.error(new Error('Something went wrong! Please try again later'));
  //   //  }, 4000);
  //   setTimeout(() => {
  //     observer.next('E');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 7000);
  // });

  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];

  // myObservable = of(this.array1, this.array2, 20, 79, 'Hello');

  public myObservable = from(this.array1); //1,2,6,7,8 => 5,10,30,35,40

  public transformedObs = this.myObservable.pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val >= 30;
    })
  );

  // public filteredObs = this.transformedObs.pipe(
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );

  ngOnInit() {
    this.transformedObs.subscribe(
      (val: any) => {
        console.log(val);
      },
      (error: any) => {
        alert(error.message);
      }
      // () => {
      //   alert('Observable has complete emitting all values.');
      // }
    );
  }
}
