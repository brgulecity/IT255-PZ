import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {HttpClient,  HttpHeaders} from "@angular/common/http";
import { Response } from "@angular/http";


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {

  }

  signup(name: string, email: string, password: string) {
    return this.http.post('http://127.0.0.1/api/user',
      {name: name, email: email, password: password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
  }


  signin(email: string, password: string) {
    return this.http.post('http://127.0.0.1/api/user/signin',
      {email: email, password: password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})})
      .map(
        (response: Response) => {
          const token = response.json().token;
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          return {token: token, decoded: JSON.parse(window.atob(base64))};
        }
      )
      .do(
        tokenData => {
          localStorage.setItem('token', tokenData.token);
        }
      );
  }



  getToken() {
    return localStorage.getItem('token');
  }
}
