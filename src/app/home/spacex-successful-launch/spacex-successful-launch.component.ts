import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/_models/flight';
import { SpaceXdataService } from '../space-xdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacex-successful-launch',
  templateUrl: './spacex-successful-launch.component.html',
  styleUrls: ['./spacex-successful-launch.component.scss']
})
export class SpacexSuccessfulLaunchComponent implements OnInit {

  private flights: Flight[];
  launchSuccess;

  public get flightDetails() {
    return this.flights;
  }
  constructor(
    private httpService: SpaceXdataService,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params => {
      this.launchSuccess = params.get('success');
      this.setFlightData();
    });
  }

  ngOnInit(): void {
  }

  setFlightData() {
    this.httpService.getSpaceXDataOnLaunchSuccess(this.launchSuccess)
      .subscribe(data => {
        this.flights = [];
        this.flights = data;
      });
  }

}
