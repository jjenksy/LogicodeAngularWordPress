import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from '../posts/post-list/post-list.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
