import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermanagementclass } from './usermanagementclass';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementserviceService {
  private baseUrl: string = "http://localhost:8090/api";
  private usermanagement: Usermanagementclass;
  
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.baseUrl + '/users');
  }

  getUser(id) {
    return this.http.get(this.baseUrl + '/user/'+id)
  }

  deleteUser(id) {
    return this.http.delete(this.baseUrl + '/user/'+id)
  }

  createUser(user: Usermanagementclass) {
    return this.http.post(this.baseUrl + '/user', user)
  }

  registerUser(user: Usermanagementclass){
    console.log("user"+user.address)
    return this.http.post(this.baseUrl+'/register',user)
  }

  forgotPassword(email){
    return this.http.post(this.baseUrl + '/forgotPass', email)
  }

  changePassword(resetEmail: string){
   return this.http.post(this.baseUrl+'/changePassword',resetEmail)
  }

  // createUserForm(user: Usermanagementclass, username: String) {
  //   console.log("user"+user+"EEEEEEEEEEEEEEEEEEEEEEE"+username)
  //   return this.http.post(this.baseUrl + '/user', {entity : user, userna :username})
  // }

  editUser(user) {
    return this.http.put(this.baseUrl + '/user', user)
  }

  isLogin(user:String, pass:String){
    return this.http.post(this.baseUrl+'/isokay',{username : user, password :pass})
  }

  setter(bbs: Usermanagementclass) {
    this.usermanagement = bbs;
  }

  getter() {
    return this.usermanagement;
  }

  // createUser(user: Usermanagementclass, file: File[]) {
  //   let formData  = new FormData();
  //   formData.append('contact', new Blob([JSON.stringify(user)], {type: 'applicatiojn/json'}));
  //   if(file != undefined){
  //     if(file.length>0 || file.length == null){
  //       for (let i = 0; i < file.length; i++){
  //         formData.append('file', file[i]);
  //       }
  //     }
  //   }
  //   const header = new HttpHeaders().delete('Content-Type');
  //   return this.http.post(this.baseUrl + '/user', formData, {headers: header});
  // }
}
