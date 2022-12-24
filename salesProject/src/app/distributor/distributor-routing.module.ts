import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import { DistributorComponent } from './distributor.component';
=======
>>>>>>> c34f036e723a5054fb2a8612aee583c5ca76d3c7
>>>>>>> Stashed changes
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { StockComponent } from './stock/stock.component';

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const routes: Routes = [{path:'',component:DistributorComponent},
{path:'stock',component:StockComponent},
{path:'my-profile',component:MyProfileComponent},
{path:'purchase-order',component:PurchaceOrderComponent},
{path:'products',component:ProductsComponent}
=======
>>>>>>> Stashed changes
const routes: Routes = [
  { path: 'profile', component: MyProfileComponent },
  { path: 'products', component: ProductsComponent },
  {path:'purchase',component:PurchaceOrderComponent },
  {path:'stock',component:StockComponent}

<<<<<<< Updated upstream
=======
>>>>>>> c34f036e723a5054fb2a8612aee583c5ca76d3c7
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule { }
