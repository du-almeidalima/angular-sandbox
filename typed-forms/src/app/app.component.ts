import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <app-little-form></app-little-form>
  `,
  styles: [],
})
export class AppComponent {
  title = "typed-forms";
}
