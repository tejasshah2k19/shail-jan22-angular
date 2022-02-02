import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-imlogin',
  templateUrl: './imlogin.component.html',
  styleUrls: ['./imlogin.component.css']
})
export class IMLoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private toastr:ToastrService) { }

  email: string = ""
  password: string = ""

  ngOnInit(): void {
  }

  login() {
    let user = this.userService.authenticate(this.email, this.password)
    if (user.firstName.length ==0) {
      // alert("Invalid Credentials");
      this.toastr.error("Invalid Credentials","",{
        timeOut:3000
      })
    } else {
      localStorage.setItem("firstName", user.firstName)
      localStorage.setItem("userId", user.userId)
      this.toastr.success("Login done","",{
        timeOut:3000
      })
      this.router.navigateByUrl("/imhome")
    }
  }
}
