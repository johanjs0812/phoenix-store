import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuillEditorComponent } from 'ngx-quill';
import { CategoryService } from '../services/categories.service';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-inputpots',
  templateUrl: './inputpots.component.html',
  styleUrls: ['./inputpots.component.css']
})

export class InputpotsComponent implements  OnInit {
  @ViewChild('editor') editor!: QuillEditorComponent;
  @ViewChild('fileInput') fileInput!: ElementRef;

  initialized = false;
  isHidden = false;
  imgHide = true;

  page = '';

  categories: any[] = [];
  dataToSend = {};

  ResInf : any;
  imgSrc: string | ArrayBuffer = '';
  name: string = '';
  des: string = '';
  productId: string = '';
  categoryId: string = '';
  price: string = '';
  quantity: string = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {  };

  ngOnInit (){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = id;
      this.loadDataID(this.productId);
    }

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });

    ////////

    const urlParts = this.router.url.split('/');
    const adminRoute = urlParts[2];

    if (adminRoute === 'addproduct') {
      this.isHidden = true;
      this.imgHide = true;
      this.page = 'Thêm sản phẩm';
    }
    else {
      this.imgHide = false;
      this.isHidden = false;
      this.page = 'Chỉnh sửa sản phẩm';
    }
  };

  //THAY ẢNH
  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (reader.result !== null) {
          this.imgSrc = reader.result;
          this.imgHide = false;
        } else {
          return;
        }
      };

      reader.readAsDataURL(file);
    }
  };

  //LẤY VALUE

  onTitleInputChange(event: any) {
    this.name = event.target.value;
  }

  onOptionChange(event: any) {
    this.categoryId = event.target.value;
  }

  onPriceChange(event: any) {
    this.price = event.target.value;
  }

  onQuantityChange(event: any) {
    this.quantity = event.target.value;
  }

  //FUNCTION

  loadDataID(id: string){
    this.productService.getbyID(id).subscribe(data => {

      console.log(data)

      this.ResInf = data as any;

      this.name = this.ResInf.name;
      this.des = this.ResInf.des;
      this.quantity = this.ResInf.qtt;
      this.price = this.ResInf.price;
      this.categoryId = this.ResInf.categoryId;
      this.imgSrc = this.ResInf.img;

    });
  };

  add(){
    this.dataToSend = {
      name: this.name,
      des: this.des,
      img: this.imgSrc,
      qtt: this.quantity,
      price: this.price,
      categoryId: this.categoryId
    };
    console.log('??', this.dataToSend);
    this.productService.addData(this.dataToSend).subscribe(data => { } )
  }

  edit() {
    this.dataToSend = {
      name: this.name,
      des: this.des,
      img: this.imgSrc,
      qtt: this.quantity,
      price: this.price,
      categoryId: this.categoryId
    };
    console.log('??', this.dataToSend, this.productId);
    this.productService.update(this.productId, this.dataToSend).subscribe(data => { } )
  }

}
