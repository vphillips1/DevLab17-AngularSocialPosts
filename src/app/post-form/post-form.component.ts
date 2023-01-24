import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() newestPost: Post = {title: '', thought: ''};
  @Output() newPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {

    this.newPost.emit(this.newestPost);

  }

}
