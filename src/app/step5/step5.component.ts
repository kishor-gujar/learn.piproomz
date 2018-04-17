import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#4C7E7E";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }

}