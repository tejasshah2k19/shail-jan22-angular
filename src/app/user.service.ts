import { Injectable } from '@angular/core';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:Array<User> = [] 
  
  constructor() { }


  addUser(user:User){
    this.users.push(user);
  }
  getAllUsers(){
    return this.users 
  }

}
