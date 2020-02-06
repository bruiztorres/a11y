import { Component } from '@angular/core';

type PaymentMethod = {
  name: string;
  focus: boolean;
  selected: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-payment-method-task',
  templateUrl: './payment-method-task.component.html',
  styleUrls: ['./payment-method-task.component.scss']
})
export class PaymentMethodTaskComponent {

  public paymentMethods: PaymentMethod[] = [
    { name: 'visa ',        focus: true,  selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/vis.svg' },
    { name: 'mastercard ',  focus: false, selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/mas.svg' },
    { name: 'gift ',        focus: false, selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/GiftCard.svg' },
    { name: 'paypal ',      focus: false, selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/pay.svg' },
  ];

  public selectPaymentMethod(method: PaymentMethod) {
    this.paymentMethods.forEach(paymentMethod => {
      paymentMethod.focus = method.name === paymentMethod.name;
      paymentMethod.selected = method.name === paymentMethod.name;
    })
  }
}
