import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {Post} from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService] // tells the component where it is getting the data from
})
export class PostListComponent implements OnInit {

  posts: Post[]; // declare a variable for an array of posts
  // constructor that injects our PostService
  constructor( private postsService: PostsService) { }


  getPosts() {
    this.postsService
      .getPosts()
      .subscribe(res => {
        this.posts = res;
      });
  }
  ngOnInit() {
    this.getPosts();
  }

  singlePost(id: number) {
    console.log(id);
  }

}
