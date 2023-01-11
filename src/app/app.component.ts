import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value);
    });
  }

  jumpTo(section: string | null) {
    document.getElementById(section!)?.scrollIntoView({ behavior: 'smooth' });
  }
}
