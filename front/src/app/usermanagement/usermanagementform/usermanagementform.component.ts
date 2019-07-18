import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagementserviceService } from '../usermanagementservice.service';
import { Usermanagementclass } from '../usermanagementclass';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-usermanagementform',
  templateUrl: './usermanagementform.component.html',
  styleUrls: ['./usermanagementform.component.css']
})
export class UsermanagementformComponent implements OnInit {

  private user: Usermanagementclass = new Usermanagementclass();

  constructor(
    private toast:ToastrService,
    private router: Router, private userManagement: UsermanagementserviceService) { }

  ngOnInit() {
    this.user = this.userManagement.getter();
  }


  // SAVE A USER/UPDATE A USER
  processForm(){
    if(this.user.id == undefined){
      this.userManagement.createUser(this.user).subscribe((data)=>{
        this.toast.success('user was created','SUCCESS!!!');
        this.router.navigate(["/users"]);
        console.log(data);
        this.ngOnInit();
      }, (error)=>{
        this.toast.error('something went wrong','ERROR!!!');
        console.log(error)
      })
    }
    else{
      this.userManagement.editUser(this.user).subscribe((data)=>{
        console.log(data);
        this.toast.success('user was updated','UPDATED!!!');
        this.router.navigate(["/users"]);
        this.ngOnInit();
      },(error)=>{
        this.toast.error('something went wrong','ERROR!!!');
        console.log(error)
      })
      
    }
  }

  back(){
    this.router.navigate(["/users"]);
  }

}
