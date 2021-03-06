import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password)
      .subscribe(
        tokenData => console.log(tokenData),
        error => console.log(error)
      );
  }


}
