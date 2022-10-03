import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CopyDirectiveDirective} from './copy-directive.directive';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from './child/child.component';
import {DeepChildComponent} from './deep-child/deep-child.component';
import {PaneComponent} from "./pane/pane.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    CopyDirectiveDirective,
    ChildComponent,
    DeepChildComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        PaneComponent,
        DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
