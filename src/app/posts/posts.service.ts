import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';


@Injectable()
export class PostsService {

  private postsUrl = 'http://www.logi-code.com/wp-json/wp/v2/';
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

}
