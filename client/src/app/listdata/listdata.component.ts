import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';
import { CategoryService } from "../services/categories.service";
import { ProductService } from "../services/products.service";
import { UsersService } from "../services/users.service";
import { OrdersService } from "../services/orders.service";

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})

export class ListdataComponent implements OnInit{

  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 2' },
    { name: 'Item 2' },
  ];
  isModalOpen = this.items.map(() => false);

  selectedItem = 0;

  isHidden: boolean = false;
  title: string = '';
  collection: number = NaN;

  categories: any[] = [];
  products: any[] = [];
  users: any[] = [];
  orders: any[] = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService,
    private usersService: UsersService,
    private ordersService: OrdersService
  ) {  };

  ngOnInit() {

    this.loadCateData();
    this.loadProductData();
    this.loadUserData();
    this.loadOrderData();

    //HIDE TABLE
    const urlParts = this.router.url.split('/');
    const adminRoute = urlParts[2];

    switch (adminRoute) {
      case 'categories':
        this.title = 'Danh mục';
        this.isHidden = true;
        this.collection = 0;
        this.selectedItem = 0;
        break;

      case 'products':
        this.title = 'Sản phẩm';
        this.isHidden = true;
        this.collection = 1;
        this.selectedItem = 1;
        break;

      case 'users':
        this.title = 'Người dùng';
        this.isHidden = true;
        this.collection = 2;
        this.selectedItem = 2;
        break;

      case 'orders':
        this.title = 'Đơn hàng';
        this.isHidden = true;
        this.collection = 3;
        this.selectedItem = 3;
        break;

      case 'home':
        this.title = '';
        this.collection = NaN;
        this.selectedItem = 0;
        break;

      default:
        this.title = '';
        this.collection = NaN;
        this.selectedItem = 0;
    }
    console.log('in', this.selectedItem, this.collection);

  }

  // HOVER BTN
  openModal(index: number) {
    this.isModalOpen[index] = true;
  }

  closeModal(index: number) {
    this.isModalOpen[index] = false;
  }

  selectItem(index: number, event:MouseEvent ) {
    event.preventDefault();
    this.selectedItem = index;
  };

  // FUNCTION

  //CATE
  loadCateData(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  };

  delete(id:string){
    console.log('id', id)
    this.categoryService.delete(id).subscribe(data => { this.loadCateData() });
  };

  //PRODUCT
  loadProductData(){
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  };

  deletePro(id:string){
    console.log('id', id)
    this.productService.delete(id).subscribe(data => { this.loadProductData() });
  };

  //USER
  loadUserData(){
    this.usersService.getAll().subscribe(data => {
      this.users = data;
    });
  };

  deleteUser(id:string){
    console.log('id', id)
    this.usersService.delete(id).subscribe(data => { this.loadUserData() });
  };

  //ORDERS
  loadOrderData(){
    this.ordersService.getAll().subscribe(data => {
      this.orders = data;
    });
  };
}
