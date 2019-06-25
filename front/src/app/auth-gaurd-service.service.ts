import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateserviceService } from './authenticateservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServiceService {

  constructor(private router: Router,
    private authService: AuthenticateserviceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}
