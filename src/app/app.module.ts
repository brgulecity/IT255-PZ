import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostoviComponent } from './postovi/postovi.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AuthService } from "./auth.service";
import { NoviPostComponent } from './novi-post/novi-post.component';
import {PostService} from "./post.service";
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostoviComponent,
    LoginComponent,
    SignupComponent,
    NoviPostComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'novi-post',
        component: NoviPostComponent
      },
      {
        path: 'posts',
        component: PostoviComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },

    ])
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
