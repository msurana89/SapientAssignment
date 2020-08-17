import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  developer = 'Manish Surana';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }
  ngOnInit() {

  }


  yearArray(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }

  selectYear(year: string) {
    this.router.navigate(['/launch-year', year], { relativeTo: this.route });
  }

  selectSuccessfulLaunch(launchSuccessful: boolean) {
    this.router.navigate(['/launch-successful', launchSuccessful], { relativeTo: this.route });
  }

  selectSuccessfulLand(landSuccessful: boolean) {
    this.router.navigate(['/landing-successful', landSuccessful], { relativeTo: this.route });
  }
  
}
