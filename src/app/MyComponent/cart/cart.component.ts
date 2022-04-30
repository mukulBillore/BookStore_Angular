import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/bookstoreservice/cart.service';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Variable to store list of cart data  
  carts: any;
  // semi-path to get the image
  imagePath = "../../../assets/bookimg/"

  // To Pass it to param of place order button 
  userId!: any;

  token=this.router.snapshot.paramMap.get("token")

  // Injected all the depencencies to the Constructor : user-Service,book-Service,Router, cart-Service
  constructor(private route: Router, private cartService: CartService, userService: UserService,private router:ActivatedRoute) { }

  // It is triggred when this component is initilised 
  ngOnInit(): void {
    this.getAllCart();
  }


  //The home button
  tohomePage(){
    this.route.navigate(["home",this.token])
  }

  // To get the list of cart from the data-base this function is called 
  getAllCart() {
    this.cartService.getAllCarts().subscribe((getData: any) => {
      if (getData.data.length == undefined) {
        this.route.navigate(["home",this.token]);
      }
      this.carts = getData;
      this.userId = this.carts.data[0].user.userId

    })
  }

  // When function is triggred it takes cardId as parameter and then delete the cart from the database cart table using cart service  
  deleteCart(cartId: number) {
    this.cartService.deleteCartByCartId(cartId).subscribe(data => {
      window.location.reload()

    });
  }



  // when user hits "+" button in the view it is triggered 
  // parametes : cartID , cart model 
  // added's the quantity by 1 in database
  updateCartadd(cartId: number, cart: any) {
    cart.quantity = cart.quantity + 1;
    this.cartService.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe(data => {
    });

  }

  // when user hits "-" button in the view it is triggered 
  // parametes : cartID , cart model 
  // substract's the quantity by 1 in database
  updateCartsubstract(cartId: number, cart: any) {
    cart.quantity = cart.quantity - 1;
    this.cartService.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe(data => {
    });

  }

  // When user hits place order button it is truggred.
  // It redirests the user to "update" component with user Id as parameter
  goToupdateUserComponent() {
    this.route.navigate(["update", this.token]);

  }

}
