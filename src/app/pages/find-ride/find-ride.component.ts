import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.component.html',
  styleUrls: ['./find-ride.component.css']
})
export class FindRideComponent implements OnInit {
  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("05/27/2017");
  public dateValue: Date = new Date ("05/16/2017");


  constructor() { }

  ngOnInit(): void {
  }

}
