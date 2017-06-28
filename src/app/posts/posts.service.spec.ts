import {TestBed, inject, async} from '@angular/core/testing';

import { PostsService } from './posts.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BaseRequestOptions, Http, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('PostsService', () => {
  let postService: PostsService;
  let http: Http;

  beforeEach(() => {



    TestBed.configureTestingModule({

      providers: [{
        provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
        MockBackend,
        BaseRequestOptions,
        PostsService],
      schemas: [ NO_ERRORS_SCHEMA],
    });
    http = TestBed.get(Http);
    // create our postService intance
    postService = TestBed.get(PostsService);
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get value',
    async(inject([PostsService, MockBackend],
      (service: PostsService, backend: MockBackend) => {

        backend.connections.subscribe((conn: MockConnection) => {
          const options: ResponseOptions = new ResponseOptions([{}]);
          //conn.mockRespond(new Response(options));
        });

        service.getPosts().subscribe(res => {
          console.log('subcription called');
          console.log(res);
          expect(res).toBe(Array);
        });
      })));

});
