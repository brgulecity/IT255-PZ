import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../post.interface";
import { PostService } from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() postDeleted = new EventEmitter<Post>();
  editing = false;
  editValue = '';

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.post.content;
  }

  onUpdate() {
    this.postService.updatePost(this.post.id, this.editValue)
      .subscribe(
        (post: Post) => {
          this.post.content = this.editValue;
          this.editValue = '';
        }
      );
    this.editing = false;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onDelete() {
    this.postService.deletePost(this.post.id)
      .subscribe(
        () => {
          this.postDeleted.emit(this.post);
          console.log('Post obrisan');
        }
      );

  }
}
