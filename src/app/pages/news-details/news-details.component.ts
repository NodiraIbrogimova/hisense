import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/services/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  newsItem: News | undefined;
  currNews: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.currNews= Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getNewsItem(this.currNews).subscribe(item => this.newsItem = item);
  }

  openSection(id: number): any {
    return 'active' ? this.currNews === id : 'hidden';
  }

  goBack(): void {
    this.currNews = 0;
    this.location.back();
  }
}
