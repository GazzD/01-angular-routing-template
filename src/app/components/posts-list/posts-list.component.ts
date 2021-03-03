import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService
  ) { }

  ngOnInit(): void {
    this.getPosts();
    this.getPostById();
  }

  getPosts(): void {
    this.posts = [];
    this.jsonPlaceholderService.getPosts().subscribe(result => {
      // console.log(result);
      this.posts = result;
    });
  }

  getPostById(): void {
    this.jsonPlaceholderService.getPostById(1).subscribe(result => {

      console.log(result);

    })
  }

}
