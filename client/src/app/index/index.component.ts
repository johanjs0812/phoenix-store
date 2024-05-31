import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Event, Router, NavigationEnd } from '@angular/router';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit{

  products: any[] = [];
  total: any = '';
  phuphi: number = 7;
  isHidden: boolean = false;

  constructor(
    private router: Router,
    private cartService: CartService
  ){
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHidden = event.urlAfterRedirects.startsWith('/mycart');
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void{
    this.cartService.cart$.subscribe(data => {
      this.products = data;
      this.cartService.calculateTotal().subscribe(data=> {
        this.total = data;
      });
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
