import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersDPComponent} from "./components/orders-dp/orders-dp.component";
import {OrdersDetailsDPComponent} from "./components/orders-details-dp/orders-details-dp.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersDPComponent,
  },
  {
    path: 'posts/:id',
    component: OrdersDetailsDPComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
