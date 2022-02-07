import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent implements OnInit {

  constructor() {

    this.myForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, this.passwordStrength]),
      confirmPassword: new FormControl("", Validators.required)
    })

  }
  myForm: FormGroup
  ngOnInit(): void {
  }

  passwordStrength(control: AbstractControl): ValidationErrors | null {

    let pwd = control.value as string
    let cpwd = control.parent?.get("confirmPassword")?.value
    

    let upperAlphaCount = 0, lowerAlphaCount = 0, digitCount = 0,ln=0;
    if (pwd.trim().length > 7) {
      ln = 1 
      for (let i = 0; i < pwd.length; i++) {
        if (pwd.charAt(i) >= 'A' && pwd.charAt(i) <= 'Z') {
          upperAlphaCount = 1
        }
        if (pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z') {
          lowerAlphaCount = 1
        }
        if (pwd.charAt(i) >= '0' && pwd.charAt(i) <= '9') {
          digitCount = 1
        }

      }
    } 
    console.log(upperAlphaCount+lowerAlphaCount+digitCount);
    

    if ((upperAlphaCount+lowerAlphaCount+digitCount) == 3) {
      return null
    } else {
      return {
        passwordStrength: {
            "lower":lowerAlphaCount,
            "upper":upperAlphaCount,
            "digit":digitCount,
            "ln":ln
        }
      }
    }



  }



  saveUser() {
    console.log(this.myForm.get("password")?.errors) 
    console.log(this.myForm.get("password")?.hasError('passwordStrength'));
    console.log(this.myForm.get("password")?.getError("passwordStrength").lower);
    
    console.log(this.myForm.value);
    console.log(this.myForm.valid);

  }

}
