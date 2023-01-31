import {NgModule} from '@angular/core';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {TabDetailsComponent} from "./tab-details/tab-details.component";
import {TabRouteReuseStrategy} from "../tab-route-reuse-strategy";

const routes: Routes = [
  {path: 'products/:id', component: TabDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
