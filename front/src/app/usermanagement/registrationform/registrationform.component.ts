import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagementserviceService } from '../usermanagementservice.service';
import { Usermanagementclass } from '../usermanagementclass';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  private user: Usermanagementclass = new Usermanagementclass();

  constructor(private router: Router, private userManagement: UsermanagementserviceService) { }

  ngOnInit() {

  }

  processForms() {
    this.user.active = true;
    
    this.userManagement.registerUser(this.user).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error)
      return window.alert("This username or email address has been used, please use another username and email address");  
    })
    this.router.navigate(["/login"]);
  }

  back() {
    this.router.navigate(["/login"]);
  }
}
