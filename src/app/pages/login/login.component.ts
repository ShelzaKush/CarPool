import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service'
import{UserClass} from '../../models/userModel'
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public registerCredentials=new UserClass();
  status: any;
  constructor(private http:AuthService,private sharedService:SharedService,private route:Router,private router: ActivatedRoute) { }
  
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



    this.router.params.subscribe(params => {
      if (params['status'] ) {
        this.status = params['status'];
        console.log(this.status);
      }
    })
  }
  checkUser(){
    if(!this.registerCredentials.user_name && !this.registerCredentials.password){
      alert("fill the username and password")
    }
    else{
      this.http.sendRegisterData(this.registerCredentials).subscribe((data)=>{
        
        console.log(data);
          if(data.status=="Invalid"){
           alert("invalid user credentials;")
         }
        else if(this.status=="0"){

          this.route.navigate(['/off-ride']);
        }
        else if(this.status=="1"){
          this.sharedService.getToken(true)
          this.route.navigate(['/home']);
        }
      })
    }

    


  }
}
