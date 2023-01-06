// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  public users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steave', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
  }

  constructor() {}
}
