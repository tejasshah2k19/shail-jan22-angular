import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent implements OnInit {

  constructor() {

    this.myForm = new FormGroup({
      firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
      confirmPassword: new FormControl("",Validators.required)
    })

  }
  myForm: FormGroup
  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.myForm.get("firstName")?.errors);
    
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    
  }

}
