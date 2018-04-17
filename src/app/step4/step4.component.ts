import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  
  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#6B8D44";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }

}
