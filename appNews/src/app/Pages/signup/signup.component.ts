import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { Component, ErrorHandler, Injectable } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  )
  {

  }
  ngOnit(): void {}
  public User = {
    userName : '',
    password : '',
    emailId : ''
  }
  openSnackBar(message: any,action: any) {
    this._snackBar.open(message,action,{
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  formSubmit() {
    if ( this.User.userName == '' || this.User.password == '') {
      this.openSnackBar("Name or Password is required!","close");
      return;
    }
    this.userService.addUser(this.User).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success','User' +data.userName+ 'create successfully!','success');
      },
      (error: HttpErrorResponse ) => {
        console.log(error.error.message);
        this.openSnackBar(error.error.message,"close");
      },

    )
  }

}
