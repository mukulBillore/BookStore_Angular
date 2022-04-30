import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-update-user-on-place-order',
  templateUrl: './update-user-on-place-order.component.html',
  styleUrls: ['./update-user-on-place-order.component.css']
})
export class UpdateUserOnPlaceOrderComponent implements OnInit {


  // This variable saves the data of customer, Used in html to show customer details on view 
  user: any;
  // getting the user id from the parameter 
  usertoken: any = this.route.snapshot.paramMap.get('token');
 userId:any

  // Injected all the depencencies to the Constructor : user-Service,Router,Acrivated Route
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  // Triggers when component is loaded 
  ngOnInit(): void {
 
    this.userService.getUserIdByToken(this.usertoken).subscribe((data:any)=>{
      this.userId=data.data.userId;  

      this.userService.getUserByUserId(this.userId).subscribe((getData: any) => {
        this.user = getData.data;
      });
    });
    // Get the user details from database using service layer using  the userId    
    

  }

  // Logout button 
  toHomePage() {
    this.router.navigate(["home",this.usertoken]);
  }

  // Triggred when user hits the update user button,
  // it updates the user data to the database using service layer.
  updateUser() {
    this.userService.updateUserRecordById(this.user.userId, this.user).subscribe(data => {
      this.router.navigate(["ordersummery",this.usertoken]);
    })
  }

}
