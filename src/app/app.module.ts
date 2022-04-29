import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersDPComponent } from './components/orders-dp/orders-dp.component';
import { OrdersItemDPComponent } from './components/orders-item-dp/orders-item-dp.component';
import { OrdersDetailsDPComponent } from './components/orders-details-dp/orders-details-dp.component';
import {DataService} from "./services/data.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdersDPComponent,
    OrdersItemDPComponent,
    OrdersDetailsDPComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
