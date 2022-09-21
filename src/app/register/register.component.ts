import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { user } from '../Models/user';
import { UserService } from '../services/user.service'
import { ValidatePassword } from './validatepass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: user;
  registerForm: FormGroup;
  constructor(private userservice: UserService, private router: Router) {
    this.user = new user();
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, ValidatePassword.validatePassword()),
      rePass: new FormControl(null, Validators.required)
       
    })
  }


  public get username(): any {
    return this.registerForm.get('username');
  }

  public get password(): any {
    return this.registerForm.get('password');
  }

  public get repwd(): any {
    return this.registerForm.get('repwd');
  }


  RegUser() {
    console.log(this.registerForm);

    this.user = new user(this.username.value, this.password.value);
    var result = this.userservice.RegUser(this.user);
    console.log('result', result);
    if (result == "1") {
      this.router.navigate(['Login']);
    }
    else {
      alert('Register Failed');
    }
  }

  ngOnInit(): void {
  }
  

}
