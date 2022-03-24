import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private route:Router,private userService:UserService) { }

  email!:string;
  newPassword!:string;

  ngOnInit(): void {
  }
  onlogin(){
    this.userService.forgotPasswordUser(this.email,this.newPassword).subscribe(data=>{
      console.log(data);
    });
    this.route.navigate(["login"]);
  }
}
