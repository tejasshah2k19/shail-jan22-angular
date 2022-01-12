import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-imsignup',
  templateUrl: './imsignup.component.html',
  styleUrls: ['./imsignup.component.css']
})
export class IMSignupComponent implements OnInit {

 
  user:User = {email:"",firstName:"",password:""}
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  saveData(){
    console.log(this.user);
   //db insert 
   this.userService.addUser(this.user)
    
  }

}
