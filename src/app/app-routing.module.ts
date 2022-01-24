import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { IMListUsersComponent } from './components/imlist-users/imlist-users.component';
import { IMSignupComponent } from './components/imsignup/imsignup.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"calc",component:CalculatorComponent},
  {path:"imsignup",component:IMSignupComponent},
  {path:"imlistusers",component:IMListUsersComponent},
  {path:"edituser/:userId",component:EditUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
