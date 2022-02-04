import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { IMHomeComponent } from './components/imhome/imhome.component';
import { IMListUsersComponent } from './components/imlist-users/imlist-users.component';
import { IMLoginComponent } from './components/imlogin/imlogin.component';
import { IMSignupComponent } from './components/imsignup/imsignup.component';
import { ReactiveSignupComponent } from './components/reactive-signup/reactive-signup.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"calc",component:CalculatorComponent},
  {path:"imsignup",component:IMSignupComponent},
  {path:"imlistusers",component:IMListUsersComponent},
  {path:"edituser/:userId",component:EditUserComponent},
  {path:"imhome",component:IMHomeComponent},
  {path:"imlogin",component:IMLoginComponent},

{path:"reactive-signup",component:ReactiveSignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
