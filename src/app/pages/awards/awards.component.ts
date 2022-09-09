import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { judges, orgCommittee } from './variables';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  until = new Date('Sep 17, 2022 23:59:59 GMT+0500').getTime();
  applicationIsClosed: boolean = false;
  seconds: any = 0;
  minutes: any = 0;
  hours: any = 0;
  days: any = 0;
  navItems = [
    { id: 1, name: 'О премии', tabLink: 'about-awards' },
    { id: 2, name: 'Призы и сроки', tabLink: 'awards-and-deadlines' },
    { id: 3, name: 'Жюри и критерии отбора', tabLink: 'judges-and-criterias' },
    { id: 4, name: 'Организаторы', tabLink: 'organizers' },
    { id: 5, name: 'Оргкомитет', tabLink: 'org-committee' }
  ];
  activeLink = 'about-awards';
  judges = judges;
  orgCommittee = orgCommittee;
  language: any = '';
  uz = false;
  ru = true;

  constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document) { 
    this.language = localStorage.getItem('language');
    
    // // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('ru');
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('ru');
  }

  ngOnInit(): void {
    this.calculateClockInterval;
  }

  translateLanguageTo(lang: string) {
    if (lang == 'uz') {
      this.uz = true;
      this.ru = false;
    }
    else {
      this.ru = true;
      this.uz = false;
    }

    this.translate.setDefaultLang(lang);
    this.language = lang;
    localStorage.setItem('language', lang);
    this.translate.use(lang);
  }
  
  calculateClockInterval = setInterval(() => {
    this.getTimeRemaining();
  }, 1000);


  activatePage(pageName: string) {
    const id = pageName;
    this.activeLink = pageName;
  }

  openPage(pageName: any) {
    return pageName === this.activeLink ? 'visible' : 'hidden';
  }

  getTimeRemaining() {
    const from = new Date().getTime();
    const distance = this.until - from;
    this.seconds = Math.floor((distance / 1000) % 60);
    this.minutes = Math.floor((distance / 1000 / 60) % 60);
    this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (distance < 0) {
      clearInterval(this.calculateClockInterval);
      this.applicationIsClosed = true;
      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';
    }

    this.seconds = ('0' + this.seconds).slice(-2);
    this.minutes = ('0' + this.minutes).slice(-2);
    this.hours = ('0' + this.hours).slice(-2);
    this.days = ('0' + this.days).slice(-2);
  }

}
