import { Component, OnInit } from '@angular/core';
import { IUsers } from '../Services/interfaces';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) {}
  public user!: IUsers;
  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe(
      (data: IUsers) => (this.user = data)
    );
  }
}
