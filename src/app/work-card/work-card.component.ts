import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  
  constructor() { }
  
  @Input()
  model: any;
  
  ngOnInit(): void {
    
  }

}
