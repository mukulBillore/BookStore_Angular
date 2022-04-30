import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  // Injecting the dependency of HttpClient to call the api's
  constructor(private http:HttpClient) { 
  }

    // Save the  cart data in the cart table into the database
    saveCart(cart:any){
      return this.http.post("http://localhost:8080/cart/save",cart);
    }

    // Get the data of all the cart enteries/rows from the database by calling backend api's
    getAllCarts(){
      return this.http.get("http://localhost:8080/cart/getAll");
    }

    
    // Get the data of specific  cart row from the database by calling backend api's by passing id as path variable
    getCartByCardId(Id:any){
      return this.http.get("http://localhost:8080/cart/getById/"+Id);
    }

    // Update the data of specific  cart row from the database by calling backend api's by passing id as path variable    
    updateCartByCartId(Id:any,cart:any){
      return this.http.put("http://localhost:8080/cart/updateById/"+Id,cart);
    }

    // Updating the cart quantity by passing quantity to add and cartID as request param
    updateCartByCartQuantityByCartId(Id:any,quantity:any){
      return this.http.get("http://localhost:8080/cart/updateCartQuantity/"+Id+"?quantity="+quantity)
    }

    // Deleting the cart by id as path variable
    deleteCartByCartId(Id:any){
      return this.http.delete("http://localhost:8080/cart/delete/"+Id);
    }

  



}
