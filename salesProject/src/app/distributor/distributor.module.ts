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


@NgModule({
  declarations: [
    DistributorComponent,
    MyProfileComponent,
    ProductsComponent,
    PurchaceOrderComponent,
    StockComponent,
    RaiseNewComponent,
    ViewAllComponent
  ],
  imports: [
    CommonModule,
    DistributorRoutingModule
  ]
})
export class DistributorModule { }
