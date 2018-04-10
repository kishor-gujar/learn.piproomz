import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  handler: any
  amount: number = 500; // == $5.00

  constructor() { }

  ngOnInit() {
  }

}
