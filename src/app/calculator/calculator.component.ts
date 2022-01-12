import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1 = ""
  n2 = ""
  ans = ""
  n1Error = ""
  n2Error = ""
  constructor() { }
  isError = false
  ngOnInit(): void {
  }

  add() {
   this.isError = false 
    if ((this.n1 + "").trim().length == 0) {
      this.n1Error = "Please Enter Number n1";
      this.isError = true
    }else{
      this.n1Error =""
    }

    if ((this.n2 + "").trim().length == 0) {
      this.n2Error = "Please Enter Number n2";
      this.isError = true
    }else{
      this.n2Error=""
    }

    if (this.isError == false) {
      this.ans = (parseInt(this.n1 + "") + parseInt(this.n2 + "")) + ""
    }
  }
}
