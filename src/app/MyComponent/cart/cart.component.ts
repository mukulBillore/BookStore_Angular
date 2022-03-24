import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/bookstoreservice/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: any;
  // semi-path to get the image
  imagePath = "../../../assets/bookimg/"

  constructor(private route: Router ,private cartService:CartService) { }

  ngOnInit(): void {
    this.getAllCart();
  }
  toHome() {
    this.route.navigate(["home"]);
  }

  getAllCart(){
    
    this.cartService.getAllCarts().subscribe((getData:any)=>{
      this.carts=getData;
    })
  }

  goToHome(){
    this.route.navigate(["home"]);
  }


  goToLogin(){
    this.route.navigate(["login"]);
  }

}
