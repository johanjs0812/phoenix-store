import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  products: any[] = [];

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void{
    this.cartService.cart$.subscribe(data => {
      this.products = data;
    });
  }

  remove(id: any): void{
    this.cartService.removeFromCart(id);
    this.loadCart();
  }

  increaseQtt(id: any){
    this.cartService.increaseQuantity(id);
    this.loadCart();
  }

  reduceQtt(id: any){
    this.cartService.reduceQuantity(id);
    this.loadCart();
  }
}
