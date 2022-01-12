import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  firstName: string = ""
  email = ""
  password = ""

  constructor() { }

  ngOnInit(): void {
  }

  printData() {
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);

  }
}
