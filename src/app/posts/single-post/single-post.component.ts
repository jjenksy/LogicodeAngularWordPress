import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post} from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
  providers: [PostsService] // tells the component where it is getting the data from
})
export class SinglePostComponent implements OnInit {

  private _post: Post;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.postsService.getPost(+params['id']))
      .subscribe((post: Post) => this._post = post);

    console.log(this._post);

  }


  get post(): Post {
    return this._post;
  }

  set post(value: Post) {
    this._post = value;
  }
}
