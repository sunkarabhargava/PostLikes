import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private _http: HttpClient) { }


  public addPosts(data: any): Observable<any> {
    return this._http.post(`/api/posts/addposts`, data);
  }
  public getPosts(): Observable<any> {
    return this._http.get(`/api/posts/getPosts`);
  }
  public updateLikes(data:any): Observable<any> {
    return this._http.put(`/api/posts/updatelikes`,data);
  }  
}
