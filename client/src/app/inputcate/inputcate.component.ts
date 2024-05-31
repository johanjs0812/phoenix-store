import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd, ActivatedRoute  } from '@angular/router';
import { CategoryService } from '../services/categories.service';

@Component({
  selector: 'app-inputcate',
  templateUrl: './inputcate.component.html',
  styleUrls: ['./inputcate.component.css']
})

export class InputcateComponent implements OnInit{
  category = 'main';
  title = '';
  categories: any[] = [];
  categoryInf: any;
  categoryName = '';
  categorySlug = '';
  categoryId : string = '';
  parentId = '';
  dataToSend = {};
  buttonChild : boolean = false;
  isHidden: boolean = false;

  constructor (
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  )
  {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoryId = id;
      this.loadCateDataID(this.categoryId );
    }

    const urlParts = this.router.url.split('/');
    const adminRoute = urlParts[2];

    if (adminRoute === 'addcategory') {
      this.isHidden = true;
      this.title = 'Thêm danh mục mới';
    }
    else {
      this.isHidden = false;
      this.title = 'Chỉnh sửa danh mục';
    }
  }

  /// GET VALUE
  onNameInputChange(event: any) {
    this.categoryName = event.target.value;
  }

  onSlugInputChange(event: any) {
    this.categorySlug = event.target.value;
  }

  // FUNCTION

  loadCateDataID(id: string){
    this.categoryService.getCategorybyID(id).subscribe(categories => {
      console.log(categories)
      this.categoryInf = categories as any;
      this.categoryName = this.categoryInf.name;
      this.categorySlug = this.categoryInf.slug;
    });
  };

  add(){
    this.dataToSend = {
      name: this.categoryName,
      slug: this.categorySlug,
    };

    this.categoryService.addData(this.dataToSend).subscribe(categories => { });
  }

  editCategory() {
    this.dataToSend = {
      name: this.categoryName,
      slug: this.categorySlug,
    };
    console.log('??', this.dataToSend);
    this.categoryService.updateCategory(this.categoryId, this.dataToSend).subscribe(categories => { });
  }

}
