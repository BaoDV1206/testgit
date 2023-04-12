import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn = false;
  UserName:String='';
  constructor(public loginService:LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isUserLogin();
    this.UserName = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.loginService.isUserLogin();
      if (localStorage.getItem('user')) {
        let userInLocalStore = localStorage.getItem('user');
        let userData = userInLocalStore && JSON.parse(userInLocalStore);
        this.UserName = userData.username;
      }
    })
  }
  public getUserInStr(userInLocalStore: any) {
    if (userInLocalStore != null) {
      return JSON.parse(userInLocalStore);
    } else {
      this.loginService.loguot();
      return null;
    }
  }
  public checkUserLogin(): boolean {
    return this.loginService.getUser() != null;
  }
  public logout () {
    this.loginService.loguot();
    window.location.reload();
  }
}
