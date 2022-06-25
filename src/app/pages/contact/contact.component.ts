import { Component, OnInit } from '@angular/core';
import { contactCardItems } from './variables';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactCardItems = contactCardItems;

  constructor() { }

  ngOnInit(): void {
  }

}
