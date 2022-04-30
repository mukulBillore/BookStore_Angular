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

  // Injecting the dependencies of  Router and Service
  constructor(private router: Router, private service: UserService) { }

  // Creating an empty object of UserRegistrationModel class 
  userModel: UserRegistrationModel = new UserRegistrationModel("", "", "", "", "");

  ngOnInit(): void {
  }

  // This method is triggred when the user hits the submit button in view , through ngModel it gets data of user in  user model object then
  // it calls the service layer method registeruser() to save the data in the data-base 
  onClickSaveModelRedirectToHome() {
    this.service.registerUser(this.userModel).subscribe((getData: any) => {
    });
    this.router.navigate(["login"]);
  }


  // This method is triggred when the user hits the  "to login" button in view ,it redirects the user to the login component.
  loginPage() {
    this.router.navigate(["login"]);
  }

}
