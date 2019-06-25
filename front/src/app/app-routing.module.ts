import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsermanagementformComponent } from './usermanagement/usermanagementform/usermanagementform.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';
import { RegistrationformComponent } from './usermanagement/registrationform/registrationform.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'userForm', component: UsermanagementformComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'users', component:UsermanagementComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegistrationformComponent},
  {path:'logout', component: LogoutComponent,canActivate:[AuthGaurdServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
