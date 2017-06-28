import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {EscapeHtml} from '../../filters/escape-html';

describe('PostListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent],
      schemas: [ NO_ERRORS_SCHEMA],
      providers: [EscapeHtml]
    })
  });


  it('sanity', () => {
    expect(true).toBeTruthy();
  });


});
