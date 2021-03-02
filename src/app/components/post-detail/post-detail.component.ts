import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  title: string = '';
  id: number = 0;
  body: string = '';
  userId: number = 0;

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.findById();
  }

  findById(): void {
    const checkHasPostId: boolean =this.activatedRoute.snapshot.paramMap.has('postId');
    const postId: number = Number(this.activatedRoute.snapshot.paramMap.get('postId'));
    console.log(postId);

    this.jsonPlaceholderService.getPostById(postId).subscribe(result => {
      console.log(result);
      this.title = result.title;
      this.id = result.id;
      this.body = result.body;
      this.userId = result.userId;
    });

  }


  goHome(): void {
    this.router.navigate(['/home']);
  }


}
