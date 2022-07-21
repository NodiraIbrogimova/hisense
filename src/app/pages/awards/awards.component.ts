import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { judges, orgCommittee } from './variables';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  navItems = [
    {id: 1, name: 'О Премии', tabLink: 'about-awards'},
    {id: 2, name: 'Призы и Сроки', tabLink: 'awards-and-deadlines'},
    {id: 3, name: 'Жюри и Критерии отбора', tabLink: 'judges-and-criterias'},
    {id: 4, name: 'Организаторы', tabLink: 'organizers'},
    {id: 5, name: 'Оргкомитет', tabLink: 'org-committee'}
  ];
  activeLink = 'about-awards';
  judges = judges;
  orgCommittee = orgCommittee;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  activatePage(pageName: string){
    const id = pageName;
    this.activeLink = pageName;
  }

  openPage(pageName: any){
    return pageName === this.activeLink ? 'visible' : 'hidden';
  }

}
