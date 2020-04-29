import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-offer-header',
  templateUrl: './offer-header.component.html',
  styleUrls: ['./offer-header.component.css']
})
export class OfferHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 500) { 
          $("#nav").css("background-color","#17a2b8");
        } else {
          $("#nav").css("background-color", "transparent"); 
        }
      });
    });
  
  }

}
