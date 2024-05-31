import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Product {
  id: string;
  name: string;
  qtt: number;
  price: string;
  img: string;
  des: string;
}

@Injectable({providedIn: 'root'})

export class CartService {

  private cart = new BehaviorSubject<Product[]>(this.getCartFromLocalStorage());;
  public cart$ = this.cart.asObservable();

  getCartFromLocalStorage(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  getCart(): Observable<Product[]> {
    const cart = localStorage.getItem('cart');
    const data = cart ? JSON.parse(cart) : [];
    return of(data);
  }

  saveToLocalStorage(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  saveToCart(data: any): void {
    const currentCart = this.cart.getValue();
    const existingItem = currentCart.find(item => item.id === data.id);

    if (existingItem) {
      console.log('john', typeof existingItem)
      if (!isNaN(existingItem.qtt)) {
        existingItem.qtt += 1;
      }
    } else {
      data.qtt = 1;
      currentCart.push(data);
    }

    this.cart.next(currentCart);
    this.saveToLocalStorage(currentCart);
  }

  removeFromCart(id: any): void {
    console.log('id', id)
    const currentCart = this.cart.getValue();
    const updatedCart = currentCart.filter(item => item.id !== id);
    console.log(updatedCart);

    this.cart.next(updatedCart);
    this.saveToLocalStorage(updatedCart);
  }

  increaseQuantity(id: any): void {
    const currentCart = this.cart.getValue();
    const item = currentCart.find(item => item.id === id);

    if (item) {
      item.qtt = Number(item.qtt) + 1;
      this.cart.next(currentCart);
      this.saveToLocalStorage(currentCart);
    }
  }

  reduceQuantity(id: any): void {
    const currentCart = this.cart.getValue();
    const item = currentCart.find(item => item.id === id);

    if (item) {
      if (item.qtt == 1) {
        this.removeFromCart(id);
      } else {
        item.qtt = (item.qtt) - 1;
        this.cart.next(currentCart);
        this.saveToLocalStorage(currentCart);
      }
    }
  }

  calculateTotal(): Observable<number> {
    return this.getCart().pipe(
      map((cart: any[]) => {
        const kq = cart.reduce((total: number, item: any) => total + (Number(item.price) * Number(item.qtt)), 0);
        return kq;
      })
    );
  }

}
