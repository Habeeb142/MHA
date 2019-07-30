import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  //public mail = "mail_dsk.JPG";
  
  constructor() { }
  
  ngOnInit() {
  
    //checking screen width to dislay images
    //this.scrnChecker();

    $(document).ready(()=>{

      // epci mail
      $('.img_hover').mouseover(()=>{
        $('#display').css({ 'visibility': 'visible' });
      });
      $('.img_hover').mouseout(()=>{
        $('#display').css({ 'visibility': 'hidden' });
      });

      // justsearch
      $('.img_hover1').mouseover(()=>{
        $('#display1').css({ 'visibility': 'visible' });
      });
      $('.img_hover1').mouseout(()=>{
        $('#display1').css({ 'visibility': 'hidden' });
      });

      // foodfair
      $('.img_hover2').mouseover(()=>{
        $('#display2').css({ 'visibility': 'visible' });
      });
      $('.img_hover2').mouseout(()=>{
        $('#display2').css({ 'visibility': 'hidden' });
      });

      // schApp
      $('.img_hover3').mouseover(()=>{
        $('#display3').css({ 'visibility': 'visible' });
      });
      $('.img_hover3').mouseout(()=>{
        $('#display3').css({ 'visibility': 'hidden' });
      });

      // weatherApp
      $('.img_hover4').mouseover(()=>{
        $('#display4').css({ 'visibility': 'visible' });
      });
      $('.img_hover4').mouseout(()=>{
        $('#display4').css({ 'visibility': 'hidden' });
      });

      // BVNApp
      $('.img_hover5').mouseover(()=>{
        $('#display5').css({ 'visibility': 'visible' });
      });
      $('.img_hover5').mouseout(()=>{
        $('#display5').css({ 'visibility': 'hidden' });
      });

      // JavaScript
      $('.img_hover8').mouseover(()=>{
        $('#display8').css({ 'visibility': 'visible' });
      });
      $('.img_hover8').mouseout(()=>{
        $('#display8').css({ 'visibility': 'hidden' });
      });

      // sqi
      $('.img_hover6').mouseover(()=>{
        $('#display6').css({ 'visibility': 'visible' });
      });
      $('.img_hover6').mouseout(()=>{
        $('#display6').css({ 'visibility': 'hidden' });
      });

      // Zilt
      $('.img_hover7').mouseover(()=>{
        $('#display7').css({ 'visibility': 'visible' });
      });
      $('.img_hover7').mouseout(()=>{
        $('#display7').css({ 'visibility': 'hidden' });
      });
    })
  }

  // scrnChecker() {
  //   if($(window).width()<=600) {
  //     this.mail = "mail_mob.JPG"
  //   }
  // }
}
