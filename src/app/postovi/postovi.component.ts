import { Component, OnInit } from '@angular/core';
import  { Post } from "../post.interface"
import { PostService} from "../post.service";

@Component({
  selector: 'app-postovi',
  templateUrl: './postovi.component.html',
  styleUrls: ['./postovi.component.css']
})
export class PostoviComponent implements OnInit {

  postovi: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onGetPostovi() {
    this.postService.getPost()
      .subscribe(
        (postovi: Post[]) => this.postovi = postovi,
        (error: Response) => console.log(error)
      );
  }

  onDeleted(post: Post) {
    const position = this.postovi.findIndex(
      (postEl: Post) => {
        return postEl.id == post.id;
      }
    );
    this.postovi.splice(position, 1);
  }

}
