import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsSources } from './../models/news-sources';

const API_KEY = '06133b94aae641cebc11adff0bfb22da';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsSource(): Observable<NewsSources> {
    return this.http.get<NewsSources>(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
  }
}
