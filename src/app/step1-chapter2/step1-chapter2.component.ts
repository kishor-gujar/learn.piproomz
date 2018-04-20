import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1-chapter2',
  templateUrl: './step1-chapter2.component.html',
  styleUrls: ['./step1-chapter2.component.scss']
})
export class Step1Chapter2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#C96756";
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }
}
