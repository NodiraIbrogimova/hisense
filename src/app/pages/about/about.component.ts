import { Component, OnInit } from '@angular/core';
import { cardDetails } from './variables';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cardDetails = cardDetails;
  
  constructor() { }

  ngOnInit(): void {
  }

}
