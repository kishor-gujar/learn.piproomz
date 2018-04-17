import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "#C96756";
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "none";
  }

}
