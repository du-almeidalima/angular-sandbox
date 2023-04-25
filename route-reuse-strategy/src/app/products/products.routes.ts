import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {TabDetailsComponent} from "./tab-details/tab-details.component";

const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      {path: 'list/:id', component: TabDetailsComponent, data: {shouldReuse: true, key: 'tab-details'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutes {
}
