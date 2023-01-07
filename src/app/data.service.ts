import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  // public dataEmitter = new EventEmitter<string>();
  public dataEmitter = new Subject<string>();

  raiseDataEmitterEvent(data: string) {
    // this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
  constructor() {}
}
