import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ListdataComponent} from './listdata/listdata.component';
import { GeneraladminComponent } from './generaladmin/generaladmin.component';
import { InputcateComponent } from './inputcate/inputcate.component';
import { InputpotsComponent } from "./inputpots/inputpots.component";
import { InputuserComponent } from "./inputuser/inputuser.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: GeneraladminComponent },
      { path: 'home', component: GeneraladminComponent},
      { path: 'categories', component: ListdataComponent},
      { path: 'products', component: ListdataComponent},
      { path: 'users', component: ListdataComponent},
      { path: 'orders', component: ListdataComponent},

      { path: 'addcategory', component: InputcateComponent},
      { path: 'editcategory/:id', component: InputcateComponent},

      { path: 'addproduct', component: InputpotsComponent},
      { path: 'editproduct/:id', component: InputpotsComponent},

      { path: 'adduser', component: InputuserComponent},
      { path: 'edituser/:id', component: InputuserComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
