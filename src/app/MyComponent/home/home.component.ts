import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/bookstoreservice/book.service';
import { CartService } from 'src/app/bookstoreservice/cart.service';
import { UserService } from 'src/app/bookstoreservice/user.service';
import { WishlistService } from 'src/app/bookstoreservice/wishlist.service';
import { CartModel } from 'src/app/Model/cart-model';
import { Wishlist } from 'src/app/Model/wishlist';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // Variable to store list of books
  books: any;
  // semi-path to get the image
  imagePath = "../../../assets/bookimg/"
  // object to store the cart model
  myCart: CartModel = new CartModel(0, 0, 0);
  //object to store the wishlist model
  myWishlist: Wishlist = new Wishlist(0, 0, 1);
  // Variable to store list of cart data  
  carts!: any;
  // Variable to store state of user's sorting preferance
  sortby!: string;

  search: any;
  //Variable to store list of wishlist data
  wishlists: any
  // To get the userId from  parameter  paseed in the  login page 
  userToken = this.getRoute.snapshot.paramMap.get("token");

  // To Get the user data  
  userId: any;

  constructor(private wishService: WishlistService, private route: Router, private userService: UserService, private bookService: BookService, private cartService: CartService, private getRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.sortby = "default"

    //console.log(this.userToken)
    this.userService.getUserIdByToken(this.userToken).subscribe((data: any) => {
      this.userId = data.data.userId
    });

    // To get the list of books from the data base this function is called when the home component is loaded
    this.getAllBooks();

    // To get the list of carts from the data base this function is called when the home component is loaded
    this.getAllCart();

    // To get the list of wishlist from the data base this function is called when the home component is loaded
    this.getAllWishList();


  }

  // Retrive the data  of the WISHLISTS from the database and saves it in the "wishlist" variable 
  getAllWishList() {
    this.wishService.getAllWishlistRecords().subscribe(data => {
      this.wishlists = data;

    })
  }

  // This function defined the logic to get all CART data from the data base using cart service .
  getAllCart() {
    this.cartService.getAllCarts().subscribe(mydata => {
      this.carts = mydata;
    });
  }

  // This function is triggred when the user hits the "Add To Cart Button" ,It check's that book is already  present in the cart or not 
  // If book is present in the cart then it shows the alert in the home that book is already present else it saves the book to the cart repository in 
  // database
  addToCart(bookId: number) {
    let i = 0
    if (this.carts.data != 0) {
      for (; i < this.carts.data.length; i++) {
        if (this.carts.data[i].book.bookId == bookId) {
          alert("book is already in cart");

          break;
        }
      }

      if (i == this.carts.data.length) {
        this.myCart.bookId = bookId;
        this.myCart.userId = this.userId;
        this.myCart.quantity = 1;
        this.cartService.saveCart(this.myCart).subscribe((getdata: any) => {
          this.carts = getdata;
          window.location.reload();

        });
      }
    } else {
      this.myCart.bookId = bookId;
      this.myCart.userId = this.userId
      this.myCart.quantity = 1;
      this.cartService.saveCart(this.myCart).subscribe((getdata: any) => {
        this.carts = getdata;
        window.location.reload();
      });
    }
  }
  // This function defined the logic to get all books data from the data base using book serive .
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((getData: any) => {
      this.books = getData;
    });
  }



  //   This function is triggred when the user hits the "sorting tab",This function defines the logic of the sorting .
  sort() {
    if (this.sortby == "Increasing") {
      this.bookService.sortBookInAscending().subscribe(data => {
        this.books = data;

      });
    } if (this.sortby == "Decreasing") {
      this.bookService.sortBookInDescending().subscribe(data => {
        this.books = data;

      });
    } if (this.sortby == "default") {
      this.bookService.getAllBooks().subscribe(data => {
        this.books = data;

      });
    }
  }





  // This function is triggred when the user hits the "search tab",
  // It searched the data on the basis of books name form the data-base through the service layer
  searchByBookname() {
    if (this.search != '') {
      this.bookService.searchBookByName(this.search).subscribe((getData: any) => {
        this.books = getData;
      });
    }
    else {
      this.ngOnInit();
    }
  }

  // This function is triggred when the user hits the "CART logo" in view, it redirects the user to the cart component
  toCartOnClickAddtoBbag() {
    this.route.navigate(["cart", this.userToken]);
  }

  // This function is triggred when the user hits the "logout logo" in view, it redirects the user to the login component
  tologinPage() {
    this.route.navigate(["login"]);

  }
  // This function is triggred when the user hits the "wishlist logo" in view,it redirects the user to the wishlist component
  wishlist() {
    this.route.navigate(["wishlist", this.userToken]);
  }


  // This function is triggred when the user hits the "Add To whishlist Button" ,It check's that book is already  present in the wishlist or not 
  // If book is present in the wishlist then it shows the alert in the home that book is already present else it saves the book 
  // to the cart repository in  database.
  addToWishList(bookId: number) {
    let i = 0
    if (this.wishlists.data != 0) {
      for (; i < this.wishlists.data.length; i++) {
        //this.wishlists.data[i].book.bookId 
        if (this.wishlists.data[i].book.bookId == bookId) {
          alert("book is already in WISHLIST");
          console.log("cons 0")
          break;
        }
      }
      if (i == this.wishlists.data.length) {
        this.myWishlist.bookId = bookId;
        this.myWishlist.userId = this.userId
        this.myWishlist.quantity = 1;
        this.wishService.saveWishList(this.myWishlist).subscribe((getdata: any) => {
          this.carts = getdata;
          window.location.reload();
        });
      }
    } else {
      this.myWishlist.bookId = bookId;
      this.myWishlist.userId = this.userId
      this.myWishlist.quantity = 1;
      this.wishService.saveWishList(this.myWishlist).subscribe((getdata: any) => {
        this.wishlists = getdata;
        window.location.reload();
      });
    }
  }










}