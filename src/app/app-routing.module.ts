import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { MyDataComponent } from './my-data/my-data.component';

const routes: Routes = [
	{ path: '', component: MyDataComponent },
	{ path: 'weather', component: WeatherComponent }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
