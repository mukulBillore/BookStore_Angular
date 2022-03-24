import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { 
  }
    saveCart(cart:any){
      return this.http.post("http://localhost:8080/cart/save",cart);
    }
    getAllCarts(){
      return this.http.get("http://localhost:8080/cart/getAll");
    }
    getCartByCardId(Id:any){
      return this.http.get("http://localhost:8080/cart/getById/"+Id);
    }
    updateCartByCartId(Id:any,cart:any){
      return this.http.put("http://localhost:8080/cart/updateById/"+Id,cart);
    }
    deleteCartByCartId(Id:any){
      return this.http.delete("http://localhost:8080/cart/delete/"+Id);
    }

  



}
