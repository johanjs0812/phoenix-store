import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AdminRoutingModule } from './admin.routes';

import { QuillModule } from 'ngx-quill';


import { AdminComponent } from './admin/admin.component';
import { ListdataComponent } from './listdata/listdata.component';
import { GeneraladminComponent } from './generaladmin/generaladmin.component';
import { InputcateComponent } from "./inputcate/inputcate.component";
import { InputpotsComponent } from "./inputpots/inputpots.component";
import { InputuserComponent } from "./inputuser/inputuser.component";

@NgModule({
  declarations: [
    AdminComponent,
    ListdataComponent,
    GeneraladminComponent,
    InputcateComponent,
    InputpotsComponent,
    InputuserComponent
  ],
  exports: [
    ListdataComponent,
    GeneraladminComponent,
    InputcateComponent,
    InputpotsComponent,
    InputuserComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CommonModule,
    AdminRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
