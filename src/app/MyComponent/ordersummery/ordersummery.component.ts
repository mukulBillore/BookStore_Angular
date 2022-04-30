import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/bookstoreservice/cart.service';
import { OrderService } from 'src/app/bookstoreservice/order.service';
import { OrderModel } from 'src/app/Model/order-model';

@Component({
  selector: 'app-ordersummery',
  templateUrl: './ordersummery.component.html',
  styleUrls: ['./ordersummery.component.css']
})
export class OrdersummeryComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private cartService: CartService,private route:ActivatedRoute) { }

  // Creating the empty user order model 
  order: OrderModel = new OrderModel(0, "", 0, 0, 0, false);
  // To get the all cart details form database 
  cart!: any
  // path of book image
  imagePath = "../../../assets/bookimg/"

  token= this.route.snapshot.paramMap.get('token');

  ngOnInit(): void {
    // When component is loaded retrives all cart data from the database 
    this.cartService.getAllCarts().subscribe((data: any) => {
      this.cart = data;
    });
  }


  // home button 
  toHomePage() {
    this.router.navigate(["home",this.token]);
  }

  // This function is triggered when the user hits the checkout button 
  // It stores the data of the books from the cart and saves it to the database and then routes to the home component
  checkout() {
    for (let i = 0; i < this.cart.data.length; i++) {
      this.order.userId = 12;
      this.order.bookId = this.cart.data[i].book.bookId;
      this.order.quantity = this.cart.data[i].quantity;
      this.order.price = this.cart.data[i].book.price*this.order.quantity;
      console.log("The totel price  ",this.order.price)
      this.order.address = "ward number 05. jabalpur";
      this.order.cancel = false;
      this.orderService.postOrder(this.order).subscribe((getData: any) => {
        this.order = getData;
      });
      this.cartService.deleteCartByCartId(this.cart.data[i].cartId).subscribe(data => {
      });

    }
    this.router.navigate(["orderplaced",this.token])
  }

}