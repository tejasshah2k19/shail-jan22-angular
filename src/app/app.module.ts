import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IMSignupComponent } from './components/imsignup/imsignup.component';
import { IMListUsersComponent } from './components/imlist-users/imlist-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { IMLoginComponent } from './components/imlogin/imlogin.component';
import { IMHomeComponent } from './components/imhome/imhome.component';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent,
    IMSignupComponent,
    IMListUsersComponent,
    EditUserComponent,
    IMLoginComponent,
    IMHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
