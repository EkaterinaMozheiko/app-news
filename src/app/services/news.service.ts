import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsSources } from './../models/news-sources';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsSource(): Observable<NewsSources> {
    return this.http.get<NewsSources>('https://newsapi.org/v2/sources');
  }
}
