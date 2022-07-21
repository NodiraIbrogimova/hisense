import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from './news';
import { NEWS } from './news-list';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(): Observable<News[]> {
    const news = of(NEWS);
    return news;
  }

  getNewsItem(id: number): Observable<News> {
    const item = NEWS.find(p => p.id === id)!;
    return of(item); 
  }
}
