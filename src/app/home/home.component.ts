import { Component, OnInit } from '@angular/core';
import { SpaceXdataService } from './space-xdata.service';
import { Flight } from '../_models/flight';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flights: Flight[];
  showFlight;
  
  get flightDetails() {
    return this.flights;
  }
  constructor(
    private httpService: SpaceXdataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.httpService.getSpaceXDataAll()
      .subscribe(data => {
        this.flights = data;
        this.showFlight = 'home';
      });
  }

}
