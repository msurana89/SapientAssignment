import { Component, OnInit } from '@angular/core';
import { SpaceXdataService } from '../space-xdata.service';
import { Flight } from 'src/app/_models/flight';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacex-launch-year',
  templateUrl: './spacex-launch-year.component.html',
  styleUrls: ['./spacex-launch-year.component.scss']
})
export class SpacexLaunchYearComponent implements OnInit {
  private flights: Flight[];
  showFlight = 'launchYear';
  selectedYear;

  public get flightDetailsByYear() {
    return this.flights;
  }
  constructor(
    private httpService: SpaceXdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      this.selectedYear = params.get('year');
      this.setFlightData();
    });
  }

  ngOnInit(): void {
  }

  setFlightData() {
    this.httpService.getSpaceXDataByLaunchYear(this.selectedYear)
      .subscribe(data => {
        this.flights = [];
        this.flights = data;
      });
  }

}
