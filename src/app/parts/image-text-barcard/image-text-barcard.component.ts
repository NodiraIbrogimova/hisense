import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-text-barcard',
  templateUrl: './image-text-barcard.component.html',
  styleUrls: ['./image-text-barcard.component.scss']
})
export class ImageTextBarcardComponent implements OnInit {

  @Input() info?: any;
  @Input() alt?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
