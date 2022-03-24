import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  registerBook(book:any){
    return this.http.post("http://localhost:8080/book/save",book);
  }

  sortBookInAscending(){
    return this.http.get("http://localhost:8080/book/sortAsc");
  }

  sortBookInDescending(){
    return this.http.get("http://localhost:8080/book/sortDesc");
  }
getAllBooks(){
   return this.http.get("http://localhost:8080/book/getAll");  
   }

   searchBookByName(name:string){
    return this.http.get("http://localhost:8080/book/searchByBookName/"+name);
  }
}
