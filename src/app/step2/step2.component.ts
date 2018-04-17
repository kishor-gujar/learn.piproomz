import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Step2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#2A5DA2";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }

}
