import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
	this.hover()
  }

  hover() {
	$(document).ready(()=>{
		// mail
	  $('.mail').mouseout(()=>{
		$('.mail').css( { 'background-color' : 'black', 'border': '1px solid #ff6c00' } )
		$('.fa-envelope').css( { 'color' : '#ff6c00' } )
	  })
	  $('.mail').mouseover(()=>{
		$('.mail').css( { 'background-color' : '#343A40', 'border': 'none' } )
		$('.fa-envelope').css( { 'color' : 'white' } )
	  })

	  $('.mail').mouseout(()=>{
		$('.mail_').css( { 'display' : 'none' } )
	  })
	  $('.mail').mouseover(()=>{
		$('.mail_').css( { 'display' : 'block' } )
	  })

	//facebook
	  $('.facebook').mouseout(()=>{
		$('.facebook').css( { 'background-color' : 'black', 'border': '1px solid #ff6c00' } )
		$('.fa-facebook').css( { 'color' : '#ff6c00' } )
	  })
	  $('.facebook').mouseover(()=>{
		$('.facebook').css( { 'background-color' : '#343A40', 'border': 'none' } )
		$('.fa-facebook').css( { 'color' : 'white' } )
	  })

	  $('.facebook').mouseout(()=>{
		$('.facebook_').css( { 'display' : 'none' } )
	  })
	  $('.facebook').mouseover(()=>{
		$('.facebook_').css( { 'display' : 'block' } )
	  })

	 //github
	  $('.github').mouseout(()=>{
		$('.github').css( { 'background-color' : 'black', 'border': '1px solid #ff6c00' } )
		$('.fa-github').css( { 'color' : '#ff6c00' } )
	  })
	  $('.github').mouseover(()=>{
		$('.github').css( { 'background-color' : '#343A40', 'border': 'none' } )
		$('.fa-github').css( { 'color' : 'white' } )
	  })

	  $('.github').mouseout(()=>{
		$('.github_').css( { 'display' : 'none' } )
	  })
	  $('.github').mouseover(()=>{
		$('.github_').css( { 'display' : 'block' } )
	  })

	//whatsapp
	  $('.whatsapp').mouseout(()=>{
		$('.whatsapp').css( { 'background-color' : 'black', 'border': '1px solid #ff6c00' } )
		$('.fa-whatsapp').css( { 'color' : '#ff6c00' } )
	  })
	  $('.whatsapp').mouseover(()=>{
		$('.whatsapp').css( { 'background-color' : '#343A40', 'border': 'none' } )
		$('.fa-whatsapp').css( { 'color' : 'white' } )
	  })

	  $('.whatsapp').mouseout(()=>{
		$('.whatsapp_').css( { 'display' : 'none' } )
	  })
	  $('.whatsapp').mouseover(()=>{
		$('.whatsapp_').css( { 'display' : 'block' } )
	  })

	//home
	  $('.home').mouseout(()=>{
		$('.home').css( { 'background-color' : 'black', 'border': '1px solid #ff6c00' } )
		$('.fa-home').css( { 'color' : '#ff6c00' } )
	  })
	  $('.home').mouseover(()=>{
		$('.home').css( { 'background-color' : '#343A40', 'border': 'none' } )
		$('.fa-home').css( { 'color' : 'white' } )
	  })

	  $('.home').mouseout(()=>{
		$('.home_').css( { 'display' : 'none' } )
	  })
	  $('.home').mouseover(()=>{
		$('.home_').css( { 'display' : 'block' } )
	  })

	//phone
	  $('.phone').mouseout(()=>{
		$('.phone').css( { 'background-color' : 'black', 'border': '1px solid #ff6c00' } )
		$('.fa-phone').css( { 'color' : '#ff6c00' } )
	  })
	  $('.phone').mouseover(()=>{
		$('.phone').css( { 'background-color' : '#343A40', 'border': 'none' } )
		$('.fa-phone').css( { 'color' : 'white' } )
	  })

	  $('.phone').mouseout(()=>{
		$('.phone_').css( { 'display' : 'none' } )
	  })
	  $('.phone').mouseover(()=>{
		$('.phone_').css( { 'display' : 'block' } )
	  })
	})
  }

}
