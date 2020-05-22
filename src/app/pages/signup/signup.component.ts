import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserClass } from '../../models/userModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userData= new UserClass();


  constructor(private _Service: AuthService,private route:Router) { }

  ngOnInit(): void {
    const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  }

  
  registerUser(){
    console.log(this.userData)
    this._Service.senduserData(this.userData).subscribe((res)=>{

      if(res.status=="succesful"){
        alert("register succesfully");
        this.route.navigate(['/login/0']);

      }
      
    })
  }
 loginpage(){
   this.route.navigate(['/login/0']);
 }
}
