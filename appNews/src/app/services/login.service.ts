import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(
    private http:HttpClient
    ) { }

    //current user: which is login
    public currentUser() {
      return this.http.get(`${baseUrl}/current-user`);
    }
  //generate token
  public generateToken(loginData: unknown) {
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //login success set token in local store
  public login(token: any) {
    localStorage.setItem('token',token);
    return true;
  }

  public isUserLogin() {
    let tokenInLocalStore = localStorage.getItem('token');
    if (tokenInLocalStore == undefined || tokenInLocalStore == '' || tokenInLocalStore == null) {
      return false;
    } else {
      return true;
    }
  }
  public loguot() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // localStorage.removeItem('userLogin');
    return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }
  public setUser(user : any) {
    localStorage.setItem('user',JSON.stringify(user));
  }
  public getUser() {
    let userInLocalStore = localStorage.getItem('user');
    if (userInLocalStore != null) {
      return JSON.parse(userInLocalStore);
    } else {

    }

  }
  public getRoleUser() {
    let user = this.getUser();
    let userLength = Object.keys(user.roles).length;
    let userRole = '';
    if (userLength == 0 )
    {
      userRole = 'USER';
    } else {
      userRole =  user.roles[0].name;
    }
    return userRole;
  }
}
