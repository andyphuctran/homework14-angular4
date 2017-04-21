import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MyHttpServiceService {

  constructor(public http:Http) { }
  getUsers(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }
  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }
}
