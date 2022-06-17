import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <main class="container">
      <button appCopyDirective="{{ code }}">COPY</button>
      <hr />
      <code lang="js">{{ code }}</code>
    </main>
  `,
  styles: [".container{  margin: auto; width: 80%; }"],
})
export class AppComponent {
  code = `const array = [1, 2, 3, 4, 5];`;
}
