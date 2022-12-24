import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistributorComponent } from './distributor.component';


import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [{path:'',component:DistributorComponent},
{path:'stock',component:StockComponent},
{path:'my-profile',component:MyProfileComponent},
{path:'purchase-order',component:PurchaceOrderComponent},
{path:'products',component:ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule { }
