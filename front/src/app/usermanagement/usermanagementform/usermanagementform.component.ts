import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagementserviceService } from '../usermanagementservice.service';
import { Usermanagementclass } from '../usermanagementclass';



@Component({
  selector: 'app-usermanagementform',
  templateUrl: './usermanagementform.component.html',
  styleUrls: ['./usermanagementform.component.css']
})
export class UsermanagementformComponent implements OnInit {

  private user: Usermanagementclass = new Usermanagementclass();

  constructor(private router: Router, private userManagement: UsermanagementserviceService) { }

  ngOnInit() {
    this.user = this.userManagement.getter();
  }


  // SAVE A USER/UPDATE A USER
  processForm(){
    if(this.user.id == undefined){
      this.userManagement.createUser(this.user).subscribe((data)=>{
        console.log(data);
        this.ngOnInit();
      }, (error)=>{
        console.log(error)
      })
      this.router.navigate(["/users"]);
    }
    else{
      this.userManagement.editUser(this.user).subscribe((data)=>{
        
        console.log(data);
        this.ngOnInit();

      },(error)=>{
        console.log(error)
      })
      this.router.navigate(["/users"]);
    }
  }

  back(){
    this.router.navigate(["/users"]);
  }

}
