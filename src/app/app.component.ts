import { Component, OnInit } from '@angular/core';
import { IUsers } from './Services/interfaces';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'prodac-component';
  public users: IUsers[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.users;
  }
}
