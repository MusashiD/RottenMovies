import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username=""
  password=""
  errorMessage=""
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.username.trim().length===0){
      this.errorMessage = "Username necessário!";
    } else if(this.password.trim().length===0){
      this.errorMessage = "Password é necessário!";
    } else{
    this.errorMessage ="";
    let res = this.auth.login(this.username,this.password);
    if (res == 200) {
      this.router.navigate(['home'])
    }
    if (res == 403) {
      this.errorMessage = 'Login ou Senha incorretos!';
    }
  }
  }

}
