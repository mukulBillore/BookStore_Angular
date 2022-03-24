import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // Injected all the depencencies to the Constructor 
  constructor(private router:Router,private userService:UserService) { }
  
  // To store the user entered  email for login
  email!:string;

  // To store user enterd password for login
  password!:string;

  v1:string="1";
  v2:number=12
  v3!:number;  

  // To store the status of login weather sucussfull or wrong email or wrong password
  status:any;

  // to store the logined in user user id 
  userId!:any
  tostring!:string

  ngOnInit(): void {
    this.userService.loginUser("mukulbilllore88@gmail.com","123").subscribe((getData:any)=>{
      console.log(getData);
      this.userId=this.userService.getUserId(this.email);
      this.tostring=this.userId.tostring();
      console.log("the type of ",this.tostring," i s ",typeof(this.tostring))

    });
  }

  // On Submit checks whether the login credentials are correct or not if correct then redirects to home page
  onClickSubmit(){
    
    this.userService.loginUser(this.email,this.password).subscribe((getData:any)=>{
      console.log(getData);
      this.status=getData;
    });
    this.router.navigate(["home"]);
    
  }


  submitTestLoginStatus(){
    this.userService.getloginStatus(this.email,this.password).subscribe((getData:any)=>{
      console.log(getData);
      this.status=getData;
    });
      if(this.status==1){
        
        this.userService.loginUser(this.email,this.password).subscribe((getData:any)=>{
          console.log(getData);
          this.userId=this.userService.getUserId(this.email);
          this.tostring=this.userId.tostring();
          console.log("the type of ",this.tostring," i s ",typeof(this.tostring))
    
        });
        //this.router.navigate(["home",this.userId]);
        this.router.navigate(["home"]);
        alert("Login sucussfull");
        console.log("login sucussfull");

        //window.location.reload()
        }
       if(this.status==0){
        console.log("invalid user email");
        //alert("wrong email");
      }   
       if(this.status==2) {
        console.log("invalid user password");
        //alert("wrong password");        
      } 
    
      
  }

  onClickRedirectToRegister(){
   this.router.navigate(["register"]);
  }
  
  onClickGotoForgotPassword(){
    this.router.navigate(["forgotpassword"]);
  }

}
