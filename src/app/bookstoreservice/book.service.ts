import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Injecting the dependency of HttpClient to call the api's
  constructor(private http: HttpClient) { }


  // To save the book in the book table in database
  registerBook(book: any) {
    return this.http.post("http://localhost:8080/book/save", book);
  }

  // To get all the books from database in the form of assending order by 'PRICE'
  sortBookInAscending() {
    return this.http.get("http://localhost:8080/book/sortAsc");
  }

  // To get all the books from database in the form of descending order by 'PRICE'
  sortBookInDescending() {
    return this.http.get("http://localhost:8080/book/sortDesc");
  }

  // To get all the books from database as it is inserted 
  getAllBooks() {
    return this.http.get("http://localhost:8080/book/getAll");
  }

  //  To get the specifc data of book by bookname 
  searchBookByName(name: string) {
    return this.http.get("http://localhost:8080/book/searchByBookName/" + name);
  }
}
