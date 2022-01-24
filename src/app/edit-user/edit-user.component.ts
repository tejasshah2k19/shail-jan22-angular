import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { }
   
  user:User={userId:"",firstName:"",email:"",password:""}
  ngOnInit(): void {
    this.user.userId = this.activatedRoute.snapshot.params.userId 
     console.log(this.user.userId);   
      this.getDataById() 
    }

  updateData(){
      console.log(this.user);   
    
    }

  getDataById(){
      this.user = this.userService.getUserDetailById(this.user.userId)
      console.log(this.user);
      
    }
}
