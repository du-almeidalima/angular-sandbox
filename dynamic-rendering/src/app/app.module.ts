import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateRefContainerComponent } from './components/template-ref-container/template-ref-container.component';
import { MouseComponent } from './components/mouse/mouse.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefContainerComponent,
    MouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
