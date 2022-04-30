import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './MyComponent/cart/cart.component';
import { ForgotpasswordComponent } from './MyComponent/forgotpassword/forgotpassword.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { OrderplacedComponent } from './MyComponent/orderplaced/orderplaced.component';
import { OrdersummeryComponent } from './MyComponent/ordersummery/ordersummery.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { UpdateUserOnPlaceOrderComponent } from './MyComponent/update-user-on-place-order/update-user-on-place-order.component';
import { WishlistComponent } from './MyComponent/wishlist/wishlist.component';

const routes: Routes = [

  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"cart",component:CartComponent},
  {path:"cart/:token",component:CartComponent},
  {path:"home/:token",component:HomeComponent},
  {path:"update/:token",component:UpdateUserOnPlaceOrderComponent},
  {path:"update/:useremail",component:UpdateUserOnPlaceOrderComponent},
  {path:"update",component:UpdateUserOnPlaceOrderComponent},
  {path:"ordersummery/:token",component:OrdersummeryComponent},
  {path:"orderplaced/:token",component:OrderplacedComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"wishlist/:token",component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
