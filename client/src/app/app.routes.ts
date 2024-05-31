import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { IndexComponent } from './index/index.component';
import { StoreComponent } from './store/store.component';
import { DetailComponent } from './detail/detail.component';
import { ConfigpaymentComponent } from './configpayment/configpayment.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'mycart', component: CartComponent },
      { path: 'store', component: StoreComponent },
      { path: 'detail/:id', component: DetailComponent},
    ]
  },
  { path: 'payment', component: ConfigpaymentComponent },
  { path: 'admin', loadChildren: () => import('./admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
