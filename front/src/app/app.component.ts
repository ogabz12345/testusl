import { Component } from '@angular/core';
import { AuthenticateserviceService } from './authenticateservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tester';

  constructor(private loginService:AuthenticateserviceService){

  }
}
