import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { StockComponent } from './stock/stock.component';
import { RaiseNewComponent } from './purchace-order/raise-new/raise-new.component';
import { ViewAllComponent } from './purchace-order/view-all/view-all.component';



@NgModule({
  declarations: [
    MyProfileComponent,
    ProductsComponent,
    PurchaceOrderComponent,
    StockComponent,
    RaiseNewComponent,
    ViewAllComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DistributorModule { }
