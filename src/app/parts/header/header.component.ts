import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {name: 'Главная', link: 'home'},
    {name: 'О Нас ', link: 'about'},
    {name: 'Hisense HVAC Академия', link: 'academy'},
    {name: 'Hisense Награды', link: 'awards'},
    {name: 'Новости', link: 'news'},
    {name: 'Контакты', link: 'contact'}
  ]

  navbar = document.getElementById("nav");
  // sticky = this.navbar.offsetTop;

  constructor() {
  }

  ngOnInit(): void {}

  stickyTop(event: any) {
    console.log('events', event)
  }

  toggleMenu() {
  }
}
