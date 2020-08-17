import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../_models/flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXdataService {

  private _apiUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
  private _yearUrl = '&launch_success=true&land_success=true&launch_year=';
  private _launchUrl = '&launch_success=';
  private _landUrl = '&launch_success=true&land_success='

  constructor(
    private http: HttpClient
  ) { }

  getSpaceXDataAll(): Observable<Flight[]>{
    return this.http.get<Flight[]>(this._apiUrl);
  }

  getSpaceXDataByLaunchYear(year:string): Observable<Flight[]>{
    return this.http.get<Flight[]>(this._apiUrl + this._yearUrl + year);
  }

  getSpaceXDataOnLaunchSuccess(success: boolean): Observable<Flight[]>{
    return this.http.get<Flight[]>(this._apiUrl + this._launchUrl + success);
  }

  getSpaceXDataOnLandSuccess(success: boolean): Observable<Flight[]>{
    return this.http.get<Flight[]>(this._apiUrl + this._landUrl + success);
  }
}
