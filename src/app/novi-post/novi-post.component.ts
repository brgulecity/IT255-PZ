import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostService} from "../post.service";

@Component({
  selector: 'app-novi-post',
  templateUrl: './novi-post.component.html',
  styleUrls: ['./novi-post.component.css']
})
export class NoviPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.postService.addPost(form.value.content)
      .subscribe(
        () => alert('Post napravljen!')
      );
    form.reset();
  }

}
