import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor(public server: ServerService, private rout: Router) { }
	public location = {
    	place: null
	}

	DisplayResult: boolean = false;

	public day;

	public month;

	public date;

	public result;


	ngOnInit() {
		this.myDate();
	}

	shw() {
		//console.log(this.location);
		this.server.search(this.location).subscribe(data=>{
			console.log(data);
			this.DisplayResult = true;
			this.result = data;
		})
	}

	myDate() {
		this.date = new Date().getDate();
		
		switch (new Date().getMonth()) {
			case 0:
				this.month = "Jan";
				break;
			case 1:
				this.month = "Feb";
				break;
			case 2:
				this.month = "Mar";
				break;
			case 3:
				this.month = "Apr";
				break;
			case 4:
				this.month = "May";
				break;
			case 5:
				this.month = "Jun";
				break;
			case 6:
				this.month = "Jul";
				break;
			case 7:
				this.month = "Aug";
				break;
			case 8:
				this.month = "Sep";
				break;
			case 9:
				this.month = "Oct";
				break;
			case 10:
				this.month = "Nov";
				break;
			case 11:
				this.month = "Dec";
				break;
		}

		switch (new Date().getDay()) {
			case 0:
				this.day = "Sunday";
				break;
			case 1:
				this.day = "Monday";
				break;
			case 2:
				this.day = "Tuesday";
				break;
			case 3:
				this.day = "Wednesday";
				break;
			case 4:
				this.day = "Thursday";
				break;
			case 5:
				this.day = "Friday";
				break;
			case 6:
				this.day = "Saturday";
				break;
		}
	}

}
