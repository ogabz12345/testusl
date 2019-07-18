import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagementserviceService } from './usermanagementservice.service';
import { Usermanagementclass } from './usermanagementclass';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  private user: UsermanagementComponent[];
  selectedArea;


  constructor(
    private toast:ToastrService,
    private router: Router, private userManagement: UsermanagementserviceService) { }

  ngOnInit() {
    this.getAllUsers();
  }


  // GET ALL USERS
  getAllUsers(){
    return this.userManagement.getAllUsers().subscribe((data)=>{
      console.log(data);
      this.user = <UsermanagementComponent[]>data;
    }, (error)=>{
      console.log(error)
    })
  }

  // EDIT A USER
  editUser(user){
    this.userManagement.setter(user)
    this.router.navigate(["/userForm"])
  }

  // NEW USER
  newUser(){
    let user = new Usermanagementclass();
    this.userManagement.setter(user)
    this.router.navigate(["/userForm"])
  }

  // DELETE A USER
  deleteUser(user){
    if(!confirm(`Are you sure you want to delete ${user.firstName}`))return;
     this.userManagement.deleteUser(user.id).subscribe((data)=>{
      this.user.splice(this.user.indexOf(user), 1);
      this.toast.error(`${user.firstName} was deleted.`,'DELETED!!!')
      this.ngOnInit();
      (error)=>{
        this.toast.error('An error occurred while deleting.','ERROR!!!')
        console.log(error);
      }
    })
  }

  set(p) {
    this.selectedArea = p;
  }

}
