import { Component, Input, OnChanges } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-productsection',
  templateUrl: './productsection.component.html',
  styleUrls: ['./productsection.component.css']
})

export class ProductsectionComponent implements OnChanges{

  @Input() title: any;
  @Input() data: any;

  products: any = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnChanges(): void {
    this.products = this.data;
    console.log('procy', this.products, this.data)
  }

  AddToCart(event: any, data: any){
    event.stopPropagation();
    this.cartService.saveToCart(data);
  }

}
