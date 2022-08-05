import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { judges, orgCommittee } from './variables';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  deadline = new Date('September 17 2022 23:59:59 GMT+0500');
  // deadline = new Date('August 6 2022 1:28:59 GMT+0500');

  applicationIsClosed: boolean = false;
  seconds: any = 0;
  minutes: any = 0;
  hours: any = 0;
  days: any = 0;
  navItems = [
    {id: 1, name: 'О премии', tabLink: 'about-awards'},
    {id: 2, name: 'Призы и сроки', tabLink: 'awards-and-deadlines'},
    {id: 3, name: 'Жюри и критерии отбора', tabLink: 'judges-and-criterias'},
    {id: 4, name: 'Организаторы', tabLink: 'organizers'},
    {id: 5, name: 'Оргкомитет', tabLink: 'org-committee'}
  ];
  activeLink = 'about-awards';
  judges = judges;
  orgCommittee = orgCommittee;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.calculateClockInterval;
  }

  calculateClockInterval = setInterval(() => {
      this.getTimeRemaining(this.deadline);
  }, 1000);
  

  activatePage(pageName: string){
    const id = pageName;
    this.activeLink = pageName;
  }

  openPage(pageName: any){
    return pageName === this.activeLink ? 'visible' : 'hidden';
  }

  getTimeRemaining(endtime: Date){
      const today = new Date().getTime();
      const total = endtime.getTime() - today;
      this.seconds = Math.floor( (total/1000) % 60 );
      this.minutes = Math.floor( (total/1000/60) % 60 );
      this.hours = Math.floor( (total/(1000*60*60)) % 24 );
      this.days = Math.floor( total/(1000*60*60*24) );
    
      if (total <= 0) {
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
      console.log(`time is: ${total}`);
  }

}
