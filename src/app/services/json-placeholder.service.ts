import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }


  getPosts(): Observable<Post[]> {
    const url = this.baseUrl + '/posts';
    return this.http.get<Post[]>(url);
  }

  getPostById(id: number): Observable<Post> {
    const url = this.baseUrl + '/posts/' + id;
    return this.http.get<Post>(url);
  }


}


