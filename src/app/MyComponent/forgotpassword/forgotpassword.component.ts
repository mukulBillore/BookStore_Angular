import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {


  // Injecting the depencencies of Router and userService of service layer 
  constructor(private route:Router,private userService:UserService) { }

  
  email!:string;
  newPassword!:string;

  ngOnInit(): void {
  
  }


  // On click the "change password button"  it saves the data to the backend and then  redirects the user to the register component  
  onlogin(){
    this.userService.forgotPasswordUser(this.email,this.newPassword).subscribe(data=>{
    });
    this.route.navigate(["login"]);
  }


}
