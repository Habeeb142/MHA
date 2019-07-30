import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

constructor() { }
public dis_footer;

ngOnInit() {
	this.dis_footer = "Copyright "+ new Date().getFullYear() +" My Weather :: All rights reserved";
}

}
