import { Injectable } from '@angular/core';
import { UsermanagementserviceService } from './usermanagement/usermanagementservice.service';
import { Usermanagementclass } from './usermanagement/usermanagementclass';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateserviceService {


  constructor(private serv: UsermanagementserviceService, private router:Router,private toast:ToastrService) { }

  authenticate(username, password) {
    this.serv.isLogin(username, password).subscribe((data) => {
      if(data){
        sessionStorage.setItem('username', username);
        this.toast.success('successfully login','LOGIN!!!');
        this.router.navigate(['/users'])        
      } else {
        return  this.toast.error('please put a valid username and password...','ERROR!!!'); 
      }console.log(!!data);
    });
    
    return sessionStorage.getItem('username') == username;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')

    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.toast.success('successfully logged out','LOGGED OUT!!!'); 
  }

}
