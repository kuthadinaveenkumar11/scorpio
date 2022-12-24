import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: 'profile', component: MyProfileComponent },
  { path: 'products', component: ProductsComponent },
  {path:'purchase',component:PurchaceOrderComponent },
  {path:'stock',component:StockComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule { }
