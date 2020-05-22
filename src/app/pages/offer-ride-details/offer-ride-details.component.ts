import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-offer-ride-details',
  templateUrl: './offer-ride-details.component.html',
  styleUrls: ['./offer-ride-details.component.css']
})
export class OfferRideDetailsComponent implements OnInit {
  

  constructor(private sharedService:SharedService ,private route:Router) { }

  ngOnInit(): void {
 
    this.sharedService.getToken(true);
  }
  todayDate:Date = new Date();
  
 gotonextpage(){
    this.route.navigate(['/vehicle-info']);
 }

}
