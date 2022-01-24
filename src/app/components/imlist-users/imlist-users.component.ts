import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-imlist-users',
  templateUrl: './imlist-users.component.html',
  styleUrls: ['./imlist-users.component.css']
})
export class IMListUsersComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  users:Array<User> = []
  searchName:string=""
  
  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
  deleteUser(userId:string){
    console.log(userId);
    this.userService.deleteUser(userId);
    this.users = this.userService.getAllUsers()   
  }
  editUser(userId:string){
    this.router.navigateByUrl("/edituser/"+userId)
  }

 search(){
   console.log(this.searchName);
   this.users  = this.userService.searchByName(this.searchName) 
   
 }
  

}
