import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SharedService } from '../shared.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  type=true;

  constructor(private sharedService:SharedService,private router:Router) { }

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
   
    this.sharedService.$castToken.subscribe(token => {
      setTimeout(() => {
        if (token) {
          this.type = true;
        } else {
          this.type = false;
        }
      });
    });


  }
 
 gotologin(status){
   console.log(status)
   if(status=="offer"){
    this.router.navigate(['/login', "0"]);
   }
 else {
    this.router.navigate(['/login', "1"]);
   }
   
 }  
logoutuser(){
  this.sharedService.getToken(false)
  this.router.navigate(['/home']);
}

 

}
