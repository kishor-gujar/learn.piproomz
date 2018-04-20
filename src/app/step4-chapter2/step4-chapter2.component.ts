import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4-chapter2',
  templateUrl: './step4-chapter2.component.html',
  styleUrls: ['./step4-chapter2.component.scss']
})
export class Step4Chapter2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#6B8D44";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }
}
