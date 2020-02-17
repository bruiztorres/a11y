import { Component } from '@angular/core';

type PaymentMethod = {
  name: string;
  focus: boolean;
  selected: boolean;
  imageUrl: string;
};

enum Direction {
  Left = -1,
  Right = 1
}

@Component({
  selector: 'app-payment-method-task',
  templateUrl: './payment-method-task.component.html',
  styleUrls: ['./payment-method-task.component.scss']
})
export class PaymentMethodTaskComponent {
  public readonly direction = Direction;

  public readonly paymentMethods: PaymentMethod[] = [
    { name: 'visa ',        focus: true,  selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/vis.svg' },
    { name: 'mastercard ',  focus: false, selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/mas.svg' },
    { name: 'gift ',        focus: false, selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/GiftCard.svg' },
    { name: 'paypal ',      focus: false, selected: false, imageUrl: 'https://static.zara.net/static/images/payment/payment/pay.svg' },
  ];

  public handleKeyupChange(direction: Direction) {
    const size = this.paymentMethods.length;
    let focusIndex = this.paymentMethods
      .findIndex(pm => pm.focus) + direction;

    if (focusIndex >= size || focusIndex < 0) {
      focusIndex = focusIndex >= size ? 0 : size - 1;
    }

    this.selectPaymentMethod(this.paymentMethods[focusIndex]);
  }

  public selectPaymentMethod(method: PaymentMethod) {
    this.paymentMethods.forEach(paymentMethod => {
      paymentMethod.focus = method.name === paymentMethod.name;
      paymentMethod.selected = method.name === paymentMethod.name;
    });
  }
}
