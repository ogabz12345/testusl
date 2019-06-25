import { Component, OnInit } from '@angular/core';
import { AuthenticateserviceService } from '../authenticateservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private loginservice: AuthenticateserviceService) { }

  ngOnInit() {
    this.loginservice.logOut();
    this.router.navigate(['login']);
  }

}
