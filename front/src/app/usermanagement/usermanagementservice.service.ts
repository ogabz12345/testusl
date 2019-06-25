import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermanagementclass } from './usermanagementclass';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementserviceService {
  private baseUrl: string = "http://localhost:6070/api";
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
}
