import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  testCard = {
    order: 2
  }
  testCard2 = {
    order: 1
  }
  testCard3 = {
    order: 2
  }
  testCard4 = {
    order: 1
  }
  testCard5 = {
    order: 2
  }

  ngOnInit(): void {
  }

}
