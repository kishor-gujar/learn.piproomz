import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1-chapter1',
  templateUrl: './step1-chapter1.component.html',
  styleUrls: ['./step1-chapter1.component.scss']
})
export class Step1Chapter1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#C96756";
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }


}
