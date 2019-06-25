import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateserviceService } from '../authenticateservice.service';
import { UsermanagementserviceService } from '../usermanagement/usermanagementservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Username'
  password = 'Password'
  invalidLogin = false

  constructor(private router: Router, private loginservice: AuthenticateserviceService, private serv: UsermanagementserviceService) { }

  ngOnInit() {
  }

  
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.invalidLogin = false
      
    } else
      this.invalidLogin = true
  }

  register(){
    this.router.navigate(['register'])
  }

}
