import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../posts.service';
import {Post} from '../post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list', // the generated  selector
  templateUrl: './post-list.component.html', // the html templlate
  styleUrls: ['./post-list.component.css'], // the scoped css
  providers: [PostsService] // tells the component where it is getting the data from
})
export class PostListComponent implements OnInit {


  private _posts: Post[]; // declare a variable for an array of posts

  @ViewChild('innerHTMLTitle')
  private innerHTMLTitle: ElementRef;
  // constructor that injects our PostService
  constructor( private postsService: PostsService,
               private router: Router,
               private route: ActivatedRoute) { }


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
      this.router.navigate(['/post', id]);
  }


  get posts(): Post[] {
    console.log(this._posts);
    return this._posts;
  }

  set posts(value: Post[]) {
    this._posts = value;
  }



}
