import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HideAfterDirective } from "./directives/hide-after.directive";
import { UnlessDirective } from "./directives/unless.directive";
import { BasicImplementationComponent } from "./basic-implementation/basic-implementation.component";
import { ContextImplementationComponent } from "./context-implementation/context-implementation.component";
import { ContextHideAfterDirective } from "./directives/context-hide-after.directive";

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    BasicImplementationComponent,
    ContextImplementationComponent,
    HideAfterDirective,
    ContextHideAfterDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
