import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabDetailsComponent} from "./tab-details/tab-details.component";

const routes: Routes = [
  {path: ':id', component: TabDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
