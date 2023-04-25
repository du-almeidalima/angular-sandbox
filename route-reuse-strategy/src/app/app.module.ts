import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouteReuseStrategy} from "@angular/router";
import {TabRouteReuseStrategy} from "./products/tab-route-reuse-strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: RouteReuseStrategy, useClass: TabRouteReuseStrategy}
  ]
})
export class AppModule {
}
