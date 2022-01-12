import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-imlist-users',
  templateUrl: './imlist-users.component.html',
  styleUrls: ['./imlist-users.component.css']
})
export class IMListUsersComponent implements OnInit {

  constructor(private userService:UserService) { }
  users:Array<User> = []
  
  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }


  

}
