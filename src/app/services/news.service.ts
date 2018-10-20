import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsSources } from './../models/news-sources';
import { NewsResponse } from '../models/news';

const API_KEY = '06133b94aae641cebc11adff0bfb22da';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsSource(): Observable<NewsSources> {
    const params = new HttpParams()
      .set('apiKey', API_KEY);
    return this.http.get<NewsSources>('https://newsapi.org/v2/sources', {params: params});
  }

  getAllNews() {
    const params = new HttpParams()
      .set('apiKey', API_KEY)
      .set('language', 'en')
      .set('pageSize', '20')
      .set('sources', 'ABC News');
    return this.http.get<NewsResponse[]>('https://newsapi.org/v2/everything', {params: params});
  }

  getNewsBySourceName(sourceName: string, language: string): Observable<NewsResponse[]> {
    const params = new HttpParams()
      .set('apiKey', API_KEY)
      .set('language', language)
      .set('pageSize', '20')
      .set('sources', sourceName);
    return this.http.get<NewsResponse[]>('https://newsapi.org/v2/everything', {params: params});
  }

}
