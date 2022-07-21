import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [
    { name: 'Главная', link: 'home' },
    { name: 'О Нас ', link: 'about' },
    { name: 'Товары', link: 'products' },
    { name: 'Hisense HVAC Академия', link: 'academy' },
    { name: 'Hisense Награды', link: 'awards' },
    { name: 'Новости', link: 'news' },
    { name: 'Контакты', link: 'contact' }
  ]

  mobileMenuIsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleMobileMenu(): any {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }
}
