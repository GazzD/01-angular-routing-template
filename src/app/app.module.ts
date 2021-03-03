import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormJaviComponent } from './components/template-driven-form-javi/template-driven-form-javi.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    PostDetailComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormJaviComponent,
    ReactiveDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
