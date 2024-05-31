import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from "../services/products.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  title: string = "Sản phẩm liên quan";

  product: any = {};
  Id : string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.Id = id;
      this.loadDataID(this.Id);
    }
  }

  loadDataID(id: string): void{
    this.productService.getbyID(id).subscribe(data => {
      this.product = data;
    })
  }
}
