import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(
      `A new user with username "${name}" with staus "${status}" has been added.`
    );
  }

  constructor() {}
}
