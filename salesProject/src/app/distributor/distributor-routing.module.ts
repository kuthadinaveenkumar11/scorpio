import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorComponent } from './distributor.component';

const routes: Routes = [{ path: '', component: DistributorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule { }
