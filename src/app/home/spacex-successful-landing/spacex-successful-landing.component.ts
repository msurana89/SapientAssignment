import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/_models/flight';
import { SpaceXdataService } from '../space-xdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacex-successful-landing',
  templateUrl: './spacex-successful-landing.component.html',
  styleUrls: ['./spacex-successful-landing.component.scss']
})
export class SpacexSuccessfulLandingComponent implements OnInit {

  private flights: Flight[];
  landSuccess;

  public get flightDetails() {
    return this.flights;
  }
  constructor(
    private httpService: SpaceXdataService,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params => {
      this.landSuccess = params.get('success');
      this.setFlightData();
    });
  }

  ngOnInit(): void {
  }

  setFlightData() {
    this.httpService.getSpaceXDataOnLandSuccess(this.landSuccess)
      .subscribe(data => {
        this.flights = [];
        this.flights = data;
      });
  }

}
