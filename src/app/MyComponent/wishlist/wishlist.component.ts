import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { CartService } from 'src/app/bookstoreservice/cart.service';
import { WishlistService } from 'src/app/bookstoreservice/wishlist.service';
import { CartModel } from 'src/app/Model/cart-model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  // Variable to store list of wishlist data  
  wishlist!: any;
  // path of books image
  imagePath = "../../../assets/bookimg/"
  // Model object to cart .
  mycart: CartModel = new CartModel(0, 0, 1);

  token=this.route.snapshot.paramMap.get('token')

  // home button 
  toHomePage() {
    this.router.navigate(["home",this.token]);
  }


  // Injected all the depencencies to the Constructor : Wishlist-Service,book-Service,Router, cart-Service
  constructor(private wishService: WishlistService, private router: Router, private cartService: CartService,private route:ActivatedRoute) { }

  // It is triggred when this component is initilised
  ngOnInit(): void {
    this.getAllWishList();
  }

  // To get the list of wishlist from the data-base this function is called 
  getAllWishList() {
    this.wishService.getAllWishlistRecords().subscribe((data: any) => {
      if (data.data.length == 0) {
        this.router.navigate(["home",this.token]);
      }
      this.wishlist = data;
    })
  }


  // When function is triggred it takes cardId as parameter and then delete the cart from the database cart table using cart service  
  deleteWishlist(wishlistId: any) {
    this.wishService.deleteWishlistRecordById(wishlistId).subscribe(data => {
      window.location.reload();
    });

  }

  // This function is triggred when the user hits add to bag button , 
  // It moves the book from wishlist to cart in database 
  addToBag(bookId: any, userId: any, wishlist: number) {
    this.mycart.bookId = bookId;
    this.mycart.userId = userId;
    this.cartService.saveCart(this.mycart).subscribe(data => {
      console.log(data);
    });
    this.deleteWishlist(wishlist);
    this.router.navigate(["cart",this.token]);

  }

}
