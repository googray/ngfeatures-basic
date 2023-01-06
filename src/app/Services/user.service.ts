import { EventEmitter, Injectable } from '@angular/core';
import { IUsers, users } from './interfaces';

@Injectable()
export class UserService {
  public users = users;

  constructor() {}

  OnShowDetailsClicked = new EventEmitter<IUsers>();

  ShowUserDetails(user: IUsers) {
    this.OnShowDetailsClicked.emit(user);
  }
}
