import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe((value) => {
      this.jumpTo(value);
    });
  }

  jumpTo(section: string | null) {
    document.getElementById(section!)?.scrollIntoView({ behavior: 'smooth' });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
