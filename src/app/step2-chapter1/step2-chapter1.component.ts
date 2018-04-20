import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2-chapter1',
  templateUrl: './step2-chapter1.component.html',
  styleUrls: ['./step2-chapter1.component.scss']
})
export class Step2Chapter1Component implements OnInit {

  constructor() { }


  ngOnInit() {
    document.body.style.backgroundColor = "#2A5DA2";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }

}
