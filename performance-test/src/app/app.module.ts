import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LagRadarComponent } from './lag-radar/lag-radar.component';
import { LargeTableComponent } from './large-table/large-table.component';
import { LargeTableRowComponent } from './large-table/large-table-row/large-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LagRadarComponent,
    LargeTableComponent,
    LargeTableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LagRadarComponent
  ]
})
export class AppModule { }
