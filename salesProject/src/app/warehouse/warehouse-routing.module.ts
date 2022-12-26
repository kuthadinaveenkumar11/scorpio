import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntimateCourierServiceAndDispatchComponent } from './intimate-courier-service-and-dispatch/intimate-courier-service-and-dispatch.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import { PreparePackingListAsPerPurchaseOrderComponent } from './prepare-packing-list-as-per-purchase-order/prepare-packing-list-as-per-purchase-order.component';
import { ReceivePurchaseOrdersFromAuthorizerComponent } from './receive-purchase-orders-from-authorizer/receive-purchase-orders-from-authorizer.component';
import { UpdateTheCourierTrackingInfoToMicroDistributorComponent } from './update-the-courier-tracking-info-to-micro-distributor/update-the-courier-tracking-info-to-micro-distributor.component';
import { WarehouseComponent } from './warehouse.component';

const routes: Routes = [{ path: '', component: WarehouseComponent },
{
  path:'new-stock',component:NewStockEntryComponent
},
{
  path:'courier-service',component:IntimateCourierServiceAndDispatchComponent
},
{
  path:'prepare-packing-list',component:PreparePackingListAsPerPurchaseOrderComponent
},
{
  path:'receive purchase orders',component:ReceivePurchaseOrdersFromAuthorizerComponent
},
{
  path:'update the courier tracking info',component:UpdateTheCourierTrackingInfoToMicroDistributorComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
