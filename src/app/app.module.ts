import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './MyComponent/header/header.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { ForgotpasswordComponent } from './MyComponent/forgotpassword/forgotpassword.component';
import { CartComponent } from './MyComponent/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    ForgotpasswordComponent,
    CartComponent
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
