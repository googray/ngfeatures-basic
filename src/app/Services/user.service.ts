import { LoggerService } from './logger.service';

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steave', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.logger.LogMessage(name, status);
  }

  constructor(private logger: LoggerService) {}
}
