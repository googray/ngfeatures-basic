import { Component, OnInit } from '@angular/core';
import { IUsers } from '../Services/interfaces';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  public users: IUsers[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  ShowDetails(user: IUsers) {
    this.userService.ShowUserDetails(user);
  }
}
