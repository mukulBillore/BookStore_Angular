import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/bookstoreservice/book.service';
import { CartService } from 'src/app/bookstoreservice/cart.service';
import { CartModel } from 'src/app/Model/cart-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Injected all the depencencies to the Constructor 
  constructor(private route: Router, private bookService: BookService, private cartService: CartService,private getRoute:ActivatedRoute) { }

  // Variable to store list of books
  books: any=[];

  // semi-path to get the image
  imagePath = "../../../assets/bookimg/"

  // variable to store the cart model
  myCart: CartModel = new CartModel(0, 0, 0);

  // Varible to store list of carts from the data base
  carts!: any;
  
  // Variable to store state of user's sorting preferance  
  sortby!: string;
  
  // Used to store the search keyword
  see:any=[];

  search:any=[];

  userId= this.getRoute.snapshot.paramMap.get("userId");

  // This function is executed when the home component is loaded
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(getData => {
      console.log(getData);
      this.books = getData;
      console.log(this.books.data);
    });
    // To get the list of books from the data base this function is called when the home component is loaded
    //this.getAllBooks();
  
    // To get the list of carts from the data base this function is called when the home component is loaded 
    //this.toGetAllCart();

    //  this.cartService.getAllCarts().subscribe((getData:any)=>{
    //    this.carts=getData;
    //  });
  }

  // This function defined the logic to get all books data from the data base using book serive . 
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((getData:any) => {
      console.log(getData);
      this.books = getData;
    });
  }

  // This function defined the logic to get all cart data from the data base using book serive .  
  toGetAllCart() {
    console.log("hello cart please save data");
    this.cartService.getAllCarts().subscribe(data => {
      console.log(data);
      this.carts = data;
    });

  }

  //This function defines the logic of the sorting .
  sort() {
    if (this.sortby == "Increasing") {
      this.bookService.sortBookInAscending().subscribe(data => {
        this.books = data;
        console.log("the value of books in assending order : ", this.books.data);

      });
    } if (this.sortby == "Decreasing") {
      this.bookService.sortBookInDescending().subscribe(data => {
        this.books = data;
        console.log("the value of books in decending order : ", this.books.data);

      });
    } if (this.sortby == "default") {
      this.bookService.getAllBooks().subscribe(data => {
        this.books = data;
        console.log("the value of books in  the order of insertion in the database : ", this.books.data);

      });
    }
  }

  

  // This function when ever called 
  addToCart(bId: number) {
    this.myCart.bookId = bId;
    this.myCart.userId =1; //  this.userId;
    this.myCart.quantity = 1;
    this.cartService.saveCart(this.myCart).subscribe((getdata:any) => {
      console.log(getdata);
      this.carts=getdata.data;
    });
  }


  // This function when ever called it searched the data on the basis of books name form the data base through the service layer
  searchby() {
    //this.see="Black Magic"
    console.log("The value of the search is : ", this.see)
    this.bookService.searchBookByName(this.see).subscribe((data:any) => {
      console.log("data is : ", data);
      this.books = data;
    })
  }


  displayBook(){
    console.log(this.search);
    this.bookService.searchBookByName(this.search).subscribe((getData:any)=>{
      console.log("Book record retrieved by applying search method");
      this.books=getData;
      console.log(this.books);
    });
  }

  // When ever this function is called it redirects the user to the cart component 
  toCartOnClickAddtoBbag() {
    this.route.navigate(["cart"]);
  }

  // When ever this function is called it redirects the user to the login component 
  tologinPage() {
    this.route.navigate(["login"]);

  }

}
// enableDisableRule(){
  //   this.toggle = !this.toggle;
  //   this.status = this.toggle ? 'Enable' : 'Disable';
  // }