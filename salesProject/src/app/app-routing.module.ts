import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'Warehouse', loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule) },
  { path: 'Authorizer', loadChildren: () => import('./authorizer/authorizer.module').then(m => m.AuthorizerModule) },
  { path: 'Distributor', loadChildren: () => import('./distributor/distributor.module').then(m => m.DistributorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
