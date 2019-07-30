import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { MyDataComponent } from './my-data/my-data.component';
import { NavBarMyDataComponent } from './nav-bar-my-data/nav-bar-my-data.component';
import { HomeMyDataComponent } from './home-my-data/home-my-data.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
	declarations: [
		AppComponent,

		SearchComponent,

		NavBarComponent,

		FooterComponent,

		WeatherComponent,

		MyDataComponent,

		NavBarMyDataComponent,

		HomeMyDataComponent,

		AboutMeComponent,

		ResumeComponent,

		SkillsComponent,

		ProjectsComponent,

		ContactComponent,

		SendMessageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
