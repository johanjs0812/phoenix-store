import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title1: string = "Nổi bật";
  title2: string = "Đang là xu hướng";

  products: any = [];
  section1: any = [];
  section2: any = [];

  constructor(
    private productService: ProductService,
  ){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    this.productService.getAll().subscribe(data => {
      this.products = data.map(product => {
        const parser = new DOMParser();
        const document = parser.parseFromString(product.des, 'text/html');
        product.des = document.body.textContent || '';
        return product;
      });

      // Lấy 4 sản phẩm đầu tiên
      this.section1 = this.products.slice(0, 4);

      // Lấy 4 sản phẩm cuối cùng
      this.section2 = this.products.slice(-4);

      console.log(this.section1, this.section2)
    })
  }

}
