import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../posts.service';
import {Post} from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService] // tells the component where it is getting the data from
})
export class PostListComponent implements OnInit {

  private _posts: Post[]; // declare a variable for an array of posts
  @ViewChild('innerHTMLTitle')
  private innerHTMLTitle: ElementRef;
  // constructor that injects our PostService
  constructor( private postsService: PostsService) { }


  getPosts() {
    this.postsService
      .getPosts()
      .subscribe(res => {
        this._posts = res;
      });
  }
  ngOnInit() {
    this.getPosts();
  }

  singlePost(id: number) {
    console.log(id);
  }


  get posts(): Post[] {
    return this._posts;
  }

  set posts(value: Post[]) {
    this._posts = value;
  }
}
