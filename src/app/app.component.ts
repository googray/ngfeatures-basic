import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  Event,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';
  displayLoadingIndicator = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe((value) => {
      this.jumpTo(value);
    });

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.displayLoadingIndicator = false;
      }
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
