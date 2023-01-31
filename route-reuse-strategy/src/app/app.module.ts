import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabDetailsComponent} from './tab-details/tab-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouteReuseStrategy} from "@angular/router";
import {TabRouteReuseStrategy} from "../tab-route-reuse-strategy";

@NgModule({
  declarations: [
    AppComponent,
    TabDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: TabRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
