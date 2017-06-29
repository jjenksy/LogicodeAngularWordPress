import {Component, Input, OnInit} from '@angular/core';
import {AuthorDetails, AvatarUrls} from 'app/author-details/author-details';
import {PostsService} from '../posts/posts.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
  providers: [PostsService]
})
export class AuthorDetailsComponent implements OnInit {

  private _imageUrl_24: string;
  private _imageUrl_48: string;
  private _imageUrl_96: string;


  @Input()authorLink: string;
  private _authorDetails: AuthorDetails;
  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
      return this.postsService
        .getAuthor(this.authorLink)
        .subscribe((author: AuthorDetails) => this._authorDetails = author);

  }


  get authorDetails(): AuthorDetails {
    return this._authorDetails;
  }

  set authorDetails(value: AuthorDetails) {
    this._authorDetails = value;
  }


  get imageUrl_24(): string {
    if (this.authorDetails) {
      return this.authorDetails.avatar_urls[Object.keys(this.authorDetails.avatar_urls)[0]];
    }
    return null;
  }

  get imageUrl_48(): string {
    if (this.authorDetails) {
      return this.authorDetails.avatar_urls[Object.keys(this.authorDetails.avatar_urls)[1]];
    }
    return null;
  }

  get imageUrl_96(): string {
    if (this.authorDetails) {
      return this.authorDetails.avatar_urls[Object.keys(this.authorDetails.avatar_urls)[2]];
    }
    return null;

  }
}
