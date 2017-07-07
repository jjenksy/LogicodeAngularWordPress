import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdButtonModule, MdCardModule, MdGridListModule, MdSidenavModule, MdToolbarModule} from '@angular/material';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import {EscapeHtml} from './filters/escape-html';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavComponent,
    SinglePostComponent,
    EscapeHtml,
    AuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    FlexLayoutModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
