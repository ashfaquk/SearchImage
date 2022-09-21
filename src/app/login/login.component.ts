import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../Models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user;

  myLoginForm: FormGroup;

  constructor(private userservice: UserService, private router: Router) {
    this.user = new user();
    this.myLoginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {
  }

  public get username(): any {
    return this.myLoginForm.get('username');
  }

  public get password(): any {
    return this.myLoginForm.get('password');
  }



  login() {
    /*console.log(this.myloginForm);*/

    this.user = new user(this.username.value, this.password.value);

    console.log("userLogin", this.user);

    var result = this.userservice.loginIn(this.user);
    console.log('result', result);

    if (result) {
      localStorage.setItem('un', this.user.username)
      alert('login success')
    }
    else {
      alert('login Failed');
    }
  }
}

   

