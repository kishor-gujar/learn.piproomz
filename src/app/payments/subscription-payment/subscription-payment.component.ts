import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'subscription-payment',
  templateUrl: './subscription-payment.component.html',
  styleUrls: ['./subscription-payment.component.scss']
})
export class SubscriptionPaymentComponent implements OnInit {

  handler: any;

  constructor(public pmt: PaymentService) { }

  ngOnInit() {
    this.configHandler()
  }

  private configHandler() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://goo.gl/EJJYq8',
      locale: 'auto',
      token: token => {
        this.pmt.processPayment(token);
      }
    });
  }

  openHandler() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'PRO Subscription',
      amount: 1500
    });
  }

}