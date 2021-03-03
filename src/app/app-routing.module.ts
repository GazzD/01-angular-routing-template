import { Template } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';
import { TemplateDrivenFormJaviComponent } from './components/template-driven-form-javi/template-driven-form-javi.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/:postId',
    component: PostDetailComponent
  },
  {
    path: 'template-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'template-form-javi',
    component: TemplateDrivenFormJaviComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveDrivenFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
