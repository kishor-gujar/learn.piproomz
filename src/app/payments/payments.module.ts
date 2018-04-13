import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPaymentComponent } from './subscription-payment/subscription-payment.component';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubscriptionPaymentComponent],
  providers: [PaymentService]
})
export class PaymentsModule { }
