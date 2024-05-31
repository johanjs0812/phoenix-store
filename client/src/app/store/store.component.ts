import { Component, OnInit} from '@angular/core';
import { ProductService } from "../services/products.service";
import { CartService } from "../services/cart.service";
import { CategoryService } from "../services/categories.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  products: any = [];
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private categoryService: CategoryService,
  ){}

  ngOnInit(): void {
    this.loadData();
    this.loadCateData();
  }

  loadCateData(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  };

  loadData(): void{
    this.productService.getAll().subscribe(data => {
      this.products = data.map(product => {
        const parser = new DOMParser();
        const document = parser.parseFromString(product.des, 'text/html');
        product.des = document.body.textContent || '';
        return product;
      });
    })
  };

  AddToCart(event: any, data: any){
    event.stopPropagation();
    this.cartService.saveToCart(data);
  };

}
