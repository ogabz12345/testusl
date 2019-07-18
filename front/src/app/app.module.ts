import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { UsermanagementformComponent } from './usermanagement/usermanagementform/usermanagementform.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationformComponent } from './usermanagement/registrationform/registrationform.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermanagementComponent,
    UsermanagementformComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationformComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
