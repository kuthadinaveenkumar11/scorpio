import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { DistributorComponent } from './distributor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { StockComponent } from './stock/stock.component';
import { RaiseNewComponent } from './purchace-order/raise-new/raise-new.component';
import { ViewAllComponent } from './purchace-order/view-all/view-all.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisregisterComponent } from './disregister/disregister.component';
import { DetailsofitemComponent } from './detailsofitem/detailsofitem.component';

@NgModule({
  declarations: [
    DistributorComponent,
    MyProfileComponent,
    ProductsComponent,
    PurchaceOrderComponent,
    StockComponent,
    RaiseNewComponent,
    ViewAllComponent,
    DisregisterComponent,
    DetailsofitemComponent
  ],
  imports: [
    CommonModule,MatMenuModule,MatToolbarModule,MatIconModule,
    DistributorRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class DistributorModule { }
