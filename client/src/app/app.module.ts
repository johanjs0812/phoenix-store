import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsectionComponent } from './productsection/productsection.component';
import { ConfigpaymentComponent } from './configpayment/configpayment.component';

import { AdminModule } from './admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    IndexComponent,
    StoreComponent,
    DetailComponent,
    ProductsectionComponent,
    ConfigpaymentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
