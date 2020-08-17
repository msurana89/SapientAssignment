import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SpaceXdataService } from './space-xdata.service';
import { SpacexLaunchYearComponent } from './spacex-launch-year/spacex-launch-year.component';
import { SpacexSuccessfulLaunchComponent } from './spacex-successful-launch/spacex-successful-launch.component';
import { SpacexSuccessfulLandingComponent } from './spacex-successful-landing/spacex-successful-landing.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    SpacexLaunchYearComponent,
    SpacexSuccessfulLaunchComponent,
    SpacexSuccessfulLandingComponent
  ],
  imports: [
    CommonModule,
    // HomeRoutingModule
  ],
  exports: [
    CommonModule,
    // HomeRoutingModule
  ],
  providers: [SpaceXdataService]
})
export class HomeModule { }
