import { Injectable } from '@angular/core';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = []

  constructor() {
    let user: User = { userId: "123", firstName: "ram", email: "ram@gmail.com", password: "ram123" }
    this.users.push(user)
    let user2: User = { userId: "232", firstName: "sita", email: "sita@gmail.com", password: "sita123" }
    this.users.push(user2)


  }

  authenticate(email:string,password:string){
    let user:User={email:"",firstName:"",password:"",userId:""}
    for(let i=0;i<this.users.length;i++){
        if(this.users[i].email == email && this.users[i].password == password){
          user = this.users[i];
        }
      }  

      return user
  } 

  addUser(user: User) {
    this.users.push(user);
  }
  getAllUsers() {
    return this.users
  }

  deleteUser(userId: string) {

    this.users = this.users.filter(user => user.userId != userId)


    //  let userindex = -1 
    //  for(let i=0;i<this.users.length;i++){
    //    if(this.users[i].userId == userId){
    //      userindex = i 
    //      break  
    //    }
    //  } 
    //  this.users.splice(userindex,userindex+1)  // 1,5 [ 1 2 3 4]
  }

  getUserDetailById(userId: string) {
    console.log(userId);

    let user: User = { userId: userId, email: "", firstName: "", password: "" }
    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].userId == userId) {
        user = this.users[i];
        console.log("match");

        break
      }
    }
    return user
  }

  searchByName(searchName: string):Array<User> {
    let searchArray:Array<User> = [] 

    searchArray = this.users.filter(user=>user.firstName.startsWith(searchName))

    return searchArray 
  }
}
