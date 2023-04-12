import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginData: any = {
    "username":'',
    "password":''
  }
  constructor(
    private _snackBar: MatSnackBar,
    private formbuider:FormBuilder,
    private loginService:LoginService,
    private route: Router
    ) {}
  ngOnInit() {
  }
  openSnackBar(message: any,action: any) {
    this._snackBar.open(message,action,{
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  formSubmit() {
    if(this.loginData.username.trim()=='' || this.loginData.username==null) {
      this.openSnackBar("User name is required!","close");
      return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null) {
      this.openSnackBar("Password is required!","close");
      return;
    }
    //request serve generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.loginService.login(data.token);
        this.loginService.currentUser().subscribe(
          (user: any) => {
            this.loginService.setUser(user);
            if (this.loginService.getRoleUser() == 'ADMIN') {
              //admin dashboard
              localStorage.setItem('userLogin',JSON.stringify(user));
              this.route.navigate(['admin']);
              // this.loginService.loginStatusSubject.next(true);
            } else if (this.loginService.getRoleUser() == 'USER') {
              //User home
              localStorage.setItem('userLogin',JSON.stringify(user));
              this.route.navigate(['user-home']);
              // this.loginService.loginStatusSubject.next(true);
            } else {
              this.loginService.loguot();
            }
          }
        );
      },
      (error: any)=>{
        console.log("error");
        this.openSnackBar("Invalid user!","close");
      }
    );
  }

}
