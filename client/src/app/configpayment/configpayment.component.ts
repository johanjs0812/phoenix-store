import { Component } from '@angular/core';

@Component({
  selector: 'app-configpayment',
  templateUrl: './configpayment.component.html',
  styleUrls: ['./configpayment.component.css']
})

export class ConfigpaymentComponent {
  model = {
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  onSubmit() {
    console.log(this.model);
    // Thực hiện các thao tác với dữ liệu form tại đây
    // Ví dụ: gửi dữ liệu đến server, xử lý dữ liệu, v.v.
  }
}
