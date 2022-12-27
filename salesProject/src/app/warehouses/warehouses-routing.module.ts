import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import { TrackComponent } from './track/track.component';
import { WarehousesComponent } from './warehouses.component';

const routes: Routes = [{ path: '', component: WarehousesComponent },
{path:'new-stock-entry',component:NewStockEntryComponent},
{path:'track',component:TrackComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
