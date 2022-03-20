import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './MyComponent/forgotpassword/forgotpassword.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';

const routes: Routes = [

  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
