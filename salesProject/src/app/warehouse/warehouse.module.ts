import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import { ReceivePurchaseOrdersFromAuthorizerComponent } from './receive-purchase-orders-from-authorizer/receive-purchase-orders-from-authorizer.component';
import { PreparePackingListAsPerPurchaseOrderComponent } from './prepare-packing-list-as-per-purchase-order/prepare-packing-list-as-per-purchase-order.component';
import { IntimateCourierServiceAndDispatchComponent } from './intimate-courier-service-and-dispatch/intimate-courier-service-and-dispatch.component';
import { UpdateTheCourierTrackingInfoToMicroDistributorComponent } from './update-the-courier-tracking-info-to-micro-distributor/update-the-courier-tracking-info-to-micro-distributor.component';


@NgModule({
  declarations: [
    WarehouseComponent,
    NewStockEntryComponent,
    ReceivePurchaseOrdersFromAuthorizerComponent,
    PreparePackingListAsPerPurchaseOrderComponent,
    IntimateCourierServiceAndDispatchComponent,
    UpdateTheCourierTrackingInfoToMicroDistributorComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
