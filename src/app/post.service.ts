import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Response } from "@angular/http";

@Injectable()
export class PostService {
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  addPost(content: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: content});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://127.0.0.1/api/quote?token=' + token, body, {headers: headers})
  }

  getPost(): Observable<any> {
    return this.http.get('http://127.0.0.1/api/quotes')
      .map(
        (response: Response) => {
          return response.json().postovi;
        }
      );
  }

  updatePost(id: number, newContent: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: newContent});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put('http://127.0.0.1/api/quote/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deletePost(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('http://127.0.0.1/api/quote/' + id + '?token=' + token);
  }
}
