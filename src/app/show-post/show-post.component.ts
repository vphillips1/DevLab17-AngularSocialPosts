import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  @Input() thisPost: Post = {title: '', thought: ''};
  @Output() remove: EventEmitter<Post> = new EventEmitter<Post>();
  @Input() mode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  deletePost() {

    this.remove.emit(this.thisPost);
  }
}
