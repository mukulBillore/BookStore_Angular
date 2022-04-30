import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { OrderService } from 'src/app/bookstoreservice/order.service';
import { UserService } from 'src/app/bookstoreservice/user.service';
@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {

  // To store the list of order getting from database
  orders: any;
  token=this.route.snapshot.paramMap.get("token")

  // Injected all the depencencies to the Constructor : order-Service,user-Service,Router.
  constructor(private router: Router, private orderService: OrderService, private userService: UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    // To get the data of all the orders from the database when component is loaded 
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    })

  }

  // home button 
  toHomePage() {
    this.router.navigate(["home",this.token]);
  }
  // When user hits "continue shopping button" it navigates to the home 
  goToDashboard() {
    this.router.navigate(["home",this.token]);

  }






















  ngOnDestroy() {
    for (let i = 0; i < this.orders.data.length; i++) {
      this.orderService.deleteOrderRecordById(this.orders.data[i].orderID).subscribe(data => {
      });
    }
  }
}
