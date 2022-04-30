import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Injected all the depencencies to the Constructor of : router , UserService service layer, 
  constructor(private router: Router, private userService: UserService) { }

  // To store the user entered  email for login from ng model
  email!: string;

  // To store user enterd password for login from ngModel 
  password!: string;


  // To store the status of login weather sucussfull or wrong email or wrong password
  status: any;

  // to store the logined in user user id to pass later into param  
  userId!: any

  // Token to set in request param
  token!: string;
  ngOnInit(): void {

  }

  // On Submit checks whether the login credentials are correct or not if correct then redirects to home page 
  onClickSubmit() {

    this.userService.loginUser(this.email, this.password).subscribe((getData: any) => {
      this.status = getData;
    });
    this.router.navigate(["home", this.token]);
  }


  submitTestLoginStatus() {
    this.userService.getloginStatus(this.email, this.password).subscribe((getData: any) => {
      this.status = getData;
    });
    if (this.status == 1) {
      alert("Login sucussfull , PLEASE WAIT");

      this.userService.getUserId(this.email).subscribe((getData: any) => {
        this.userId = getData;
      });
      this.userService.getToken(this.email).subscribe((data: any) => {
        this.token = data.data;
        this.router.navigate(["home", this.token]);
      });
    }
    if (this.status == 0) {
      console.log("invalid user email");
    }
    if (this.status == 2) {
      console.log("invalid user password");
    }


  }

  // On click the  "registerUser" it redirects the user to the register component  
  onClickRedirectToRegister() {
    this.router.navigate(["register"]);
  }



  // On click the  "forgotpossword User" it redirects the user to the forgot password  component 
  onClickGotoForgotPassword() {
    this.router.navigate(["forgotpassword"]);
  }

}
