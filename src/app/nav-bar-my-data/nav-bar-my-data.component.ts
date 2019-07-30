import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-my-data',
  templateUrl: './nav-bar-my-data.component.html',
  styleUrls: ['./nav-bar-my-data.component.css']
})
export class NavBarMyDataComponent implements OnInit {

  public nav_class_home = "nav-link";
	public   nav_class_about = "nav-link";
	public   nav_class_resume = "nav-link";
	public   nav_class_contact = "nav-link";
	public   nav_class_projects = "nav-link";
	public   nav_class_skills = "nav-link";

	constructor() { }

	ngOnInit() {
		this.changeClass(0);
	}

	//changing nav class for active and not active
	changeClass(x) {
		//Home
		if(x==1) {
			switch(this.nav_class_home) {
				case('nav-link'):
					this.nav_class_home = "active";
					this.nav_class_about = "nav-link";
					this.nav_class_resume = "nav-link";
					this.nav_class_contact = "nav-link";
					this.nav_class_projects = "nav-link";
					this.nav_class_about = "nav-link";
					this.nav_class_skills = "nav-link";
				break;
	
				case('active'):
					this.nav_class_home = "nav-link";
					break;
			}
		}
		//About
		else if(x==2)	{
			switch(this.nav_class_about) {
				case('nav-link'):
					this.nav_class_about = "active";
					this.nav_class_home = "nav-link";
					this.nav_class_resume = "nav-link";
					this.nav_class_contact = "nav-link";
					this.nav_class_projects = "nav-link";
					this.nav_class_skills = "nav-link";
				break;
	
				case('active'):
					this.nav_class_about = "nav-link";
				break;
			}
		}
		//Resume
		else if(x==3) {
			switch(this.nav_class_resume) {
				case('nav-link'):
					this.nav_class_resume = "active";
					this.nav_class_about = "nav-link";
					this.nav_class_home = "nav-link";
					this.nav_class_contact = "nav-link";
					this.nav_class_projects = "nav-link";
					this.nav_class_skills = "nav-link";
				break;
	
				case('active'):
					this.nav_class_resume = "nav-link";
				break;
			}
		}
		//Skills
		else if(x==4) {
			switch(this.nav_class_skills) {
				case('nav-link'):
					this.nav_class_skills = "active";
					this.nav_class_about = "nav-link";
					this.nav_class_resume = "nav-link";
					this.nav_class_contact = "nav-link";
					this.nav_class_projects = "nav-link";
					this.nav_class_home = "nav-link";
				break;
	
				case('active'):
					this.nav_class_skills = "nav-link";
				break;
			}
		}
		//Projects
		else if(x==5) {
			switch(this.nav_class_projects) {
				case('nav-link'):
					this.nav_class_projects = "active";
					this.nav_class_about = "nav-link";
					this.nav_class_resume = "nav-link";
					this.nav_class_contact = "nav-link";
					this.nav_class_skills = "nav-link";
					this.nav_class_home = "nav-link";
				break;
	
				case('active'):
					this.nav_class_projects = "nav-link";
				break;
			}
		}
		//Contact
		else if(x==6) {
			switch(this.nav_class_contact) {
				case('nav-link'):
					this.nav_class_contact = "active";
					this.nav_class_about = "nav-link";
					this.nav_class_resume = "nav-link";
					this.nav_class_skills = "nav-link";
					this.nav_class_projects = "nav-link";
					this.nav_class_home = "nav-link";
				break;
	
				case('active'):
					this.nav_class_contact = "nav-link";
				break;
			}
		}
		//onload
		else{
			this.nav_class_home = "active";
			this.nav_class_about = "nav-link";
			this.nav_class_resume = "nav-link";
			this.nav_class_skills = "nav-link";
			this.nav_class_projects = "nav-link";
			this.nav_class_contact = "nav-link";
		}
		
	}
}

