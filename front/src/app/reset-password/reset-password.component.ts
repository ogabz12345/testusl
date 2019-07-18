import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usermanagementclass } from '../usermanagement/usermanagementclass';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UsermanagementserviceService } from '../usermanagement/usermanagementservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private pass: Usermanagementclass = new Usermanagementclass();
  decode: any;

  constructor(
    private toast:ToastrService,
    private router: Router, private activatedRoute: ActivatedRoute,private reset: UsermanagementserviceService) { }

  ngOnInit() {
    this.save();
    this.changePass();
  }

  save(){
    this.activatedRoute.params.subscribe(params=>{
      this.decode = params.navItem;
    })
  }

  changePass(){
    return this.reset.changePassword(this.decode).subscribe(data=>{
      this.pass = <Usermanagementclass>data;
    })
  }

  resetPass(){
    this.reset.editUser(this.pass).subscribe((data)=>{
      this.toast.success('password successfully changed','SUCCESS!!!');
      this.ngOnInit();
      this.router.navigate(['/login']);

    },(error)=>{
      this.toast.error('Something went wrong','ERROR!!!');
      console.log(error)
    })

  }

}
