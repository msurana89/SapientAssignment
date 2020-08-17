import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SpacexLaunchYearComponent } from './spacex-launch-year/spacex-launch-year.component';
import { SpacexSuccessfulLaunchComponent } from './spacex-successful-launch/spacex-successful-launch.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: 'launch-year/:year', component: SpacexLaunchYearComponent },
  // { path: 'launch-successful', component: SpacexSuccessfulLaunchComponent },
  // { path: 'landing-successful', component: SpacexSuccessfulLaunchComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
