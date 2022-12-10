import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend, HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private url ='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:Http) { }
  getPosts()
  {
   return   this.http.get(this.url);
  }
}
