import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{UserClass} from '../models/userModel'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = "http://localhost:8080/CarPool/rs/";
  headers;

  constructor(private http:HttpClient) { }

  senduserData(data:UserClass):Observable<any>{

    return this.http.get(this.URL +'test/method_signup/'+data.user_name+'/'+data.phone_no+'/'+data.email+'/'+data.password+'/'+data.con_pass)
  }

  sendRegisterData(data:UserClass):Observable<any>{

    return this.http.get(this.URL +'test/method_login/'+data.user_name+'/'+data.password)


  }

}
