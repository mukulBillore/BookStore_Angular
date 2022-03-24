import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';
import { UserRegistrationModel } from 'src/app/Model/user-registration-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }

   userModel:UserRegistrationModel=new UserRegistrationModel("","","","","");
  
  ngOnInit(): void {
  }
  onClickSaveModelRedirectToHome(){
    console.log(this.userModel);
    this.service.registerUser(this.userModel).subscribe((getData:any)=>{
      console.log(getData)
    });
    console.log("user data is sucussfully saved")
    this.router.navigate(["login"]);
  }
  loginPage(){
    this.router.navigate(["login"]);
  }

}
