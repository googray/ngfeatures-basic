import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  // navigateToHome() {
  //   // this.router.navigate(['Home']);
  //   this.router.navigateByUrl('Home');
  // }

  GoToHome() {
    // this.router.navigate(['Home'], { relativeTo: this.route }); //localhost:4200/About/Home
    this.router.navigate(['Home']); //localhost:4200/Home
  }
}
