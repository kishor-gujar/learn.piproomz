import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3-chapter2',
  templateUrl: './step3-chapter2.component.html',
  styleUrls: ['./step3-chapter2.component.scss']
})
export class Step3Chapter2Component implements OnInit {

  constructor() { }
  ngOnInit() {
    document.body.style.backgroundColor = "#497B93";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }

}