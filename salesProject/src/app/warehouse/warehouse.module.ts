import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';


@NgModule({
  declarations: [
    WarehouseComponent,
    NewStockEntryComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
