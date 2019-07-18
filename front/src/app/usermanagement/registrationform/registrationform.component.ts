import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagementserviceService } from '../usermanagementservice.service';
import { Usermanagementclass } from '../usermanagementclass';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  private user: Usermanagementclass = new Usermanagementclass();

  constructor(
    private toast:ToastrService,
    private router: Router, private userManagement: UsermanagementserviceService) { }

  ngOnInit() {

  }

  processForms() {
    this.user.active = true;
    this.userManagement.registerUser(this.user).subscribe((data) => {
      this.toast.success('successfully registered','SUCCESS!!!');
      console.log(data);
    }, (error) => {
      console.log(error)
      return this.toast.error('username or email already exist.','ERROR!!!');
    })
    this.router.navigate(["/login"]);
  }

  back() {
    this.router.navigate(["/login"]);
  }
}
