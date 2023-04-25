import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabDetailsComponent} from "./tab-details/tab-details.component";
import {ProductsComponent} from "./products.component";
import {ProductsRoutes} from "./products.routes";
import {RouteReuseStrategy} from "@angular/router";
import {TabRouteReuseStrategy} from "./tab-route-reuse-strategy";


@NgModule({
  declarations: [
    ProductsComponent,
    TabDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutes
  ],
  exports: [
    ProductsRoutes
  ],

})
export class ProductsModule {
}
