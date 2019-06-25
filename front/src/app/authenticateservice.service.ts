import { Injectable } from '@angular/core';
import { UsermanagementserviceService } from './usermanagement/usermanagementservice.service';
import { Usermanagementclass } from './usermanagement/usermanagementclass';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateserviceService {


  constructor(private serv: UsermanagementserviceService, private router:Router) { }

  authenticate(username, password) {
    this.serv.isLogin(username, password).subscribe((data) => {
      if(data){
        sessionStorage.setItem('username', username)
        console.log("Working or not 1")
        this.router.navigate(['/users'])        
      } else {
         return window.alert("Invalid Login Credentials or Account Disabled (Contact The IT Support Team)");  
      }console.log(!!data);
    });
    console.log("Working or not 2")
    
    return sessionStorage.getItem('username') == username;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')

    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
