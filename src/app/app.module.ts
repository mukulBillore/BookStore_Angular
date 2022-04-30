import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './MyComponent/header/header.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { ForgotpasswordComponent } from './MyComponent/forgotpassword/forgotpassword.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { UpdateUserOnPlaceOrderComponent } from './MyComponent/update-user-on-place-order/update-user-on-place-order.component';
import { OrdersummeryComponent } from './MyComponent/ordersummery/ordersummery.component';
import { OrderplacedComponent } from './MyComponent/orderplaced/orderplaced.component';
import { WishlistComponent } from './MyComponent/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    ForgotpasswordComponent,
    CartComponent,
    UpdateUserOnPlaceOrderComponent,
    OrdersummeryComponent,
    OrderplacedComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
