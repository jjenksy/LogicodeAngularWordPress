import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import 'rxjs/add/operator/map';
import {AuthorDetails} from '../author-details/author-details';


@Injectable()
export class PostsService {

  private postsUrl = 'https://public-api.wordpress.com/wp/v2/sites/logicodesite.wordpress.com/';
  constructor(private http: Http) { }

  /**
   * getPosts with type safe return value
   * this method get the post from the wp-rest api
   * @returns {Observable<R>}
   */
  getPosts(): Observable<Post[]> {

    return this.http
      .get(this.postsUrl + 'posts')
      .map((res: Response) => res.json());
  }


  getPost(id: number): Observable<Post>{
    return this.http
      .get(this.postsUrl + 'posts/' + id)
      .map((res: Response) => res.json());
  }

  getAuthor(link: string): Observable<AuthorDetails> {
    return this.http
      .get(link)
      .map((res: Response) => res.json());
  }
}
