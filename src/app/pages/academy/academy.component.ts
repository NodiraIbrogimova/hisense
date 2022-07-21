import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent implements OnInit {
  disabled: Boolean = true;
  courses = Array(3);

  constructor() { }

  ngOnInit(): void {
  }

}
