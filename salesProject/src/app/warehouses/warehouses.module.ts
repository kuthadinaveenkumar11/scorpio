import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesComponent } from './warehouses.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    WarehousesComponent,
    NewStockEntryComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
    WarehousesRoutingModule,MatToolbarModule
  ]
})
export class WarehousesModule { }
