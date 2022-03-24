import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
   }

   loginUser(email:string, password:string){
    const params = new HttpParams()
                .set('email', email)
                .set('password', password);
    return this.http.get("http://localhost:8080/user/login"+"?email="+email+"&password="+password);
  }

  

 getloginStatus(email:string, password:string){
    return this.http.get("http://localhost:8080/user/logintest?email="+email+"&password="+password);
  }

  getUserId(email:string){
    return this.http.get("http://localhost:8080/user/getuserid?email="+email);
  }
  registerUser(userRegistrationModel:any){
    return this.http.post("http://localhost:8080/user/register",userRegistrationModel);
  }

  forgotPasswordUser(email:string, password:string): Observable<any>{
    const params = new HttpParams()
                .set('email', email)
                .set('password', password);
    return this.http.post("http://localhost:8080/user/forgotpassword", params);
  }
}
