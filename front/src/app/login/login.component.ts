import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateserviceService } from '../authenticateservice.service';
import { UsermanagementserviceService } from '../usermanagement/usermanagementservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  view: number;
  email: String;

  constructor(
    private toast:ToastrService,
    private router: Router, private loginservice: AuthenticateserviceService, private serv: UsermanagementserviceService) { }

  ngOnInit() {
    this.view = 0
  }


  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.invalidLogin = false

    } else
      this.invalidLogin = true
  }

  register() {
    this.router.navigate(['register'])
  }

  forgetPass() {
    this.view = 1
  }

  back() {
    this.view = 0
  }

  sendMail() {
    this.serv.forgotPassword(this.email).subscribe(data => {
      console.log(data);
      this.toast.success('check mail for password reset link','MAILED!!!');
    },(error)=>{
      this.toast.error('Something went wrong...','ERROR!!!');
      console.log(error)
    })
    this.view=0;

  }

}
