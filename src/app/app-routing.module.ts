import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpacexLaunchYearComponent } from './home/spacex-launch-year/spacex-launch-year.component';
import { SpacexSuccessfulLaunchComponent } from './home/spacex-successful-launch/spacex-successful-launch.component';
import { SpacexSuccessfulLandingComponent } from './home/spacex-successful-landing/spacex-successful-landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'launch-year/:year', component: SpacexLaunchYearComponent },
  { path: 'launch-successful/:success', component: SpacexSuccessfulLaunchComponent },
  { path: 'landing-successful/:success', component: SpacexSuccessfulLandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
