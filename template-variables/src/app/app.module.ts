import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
