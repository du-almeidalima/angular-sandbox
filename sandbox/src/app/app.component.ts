import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <main class="container">
      <button appCopyDirective="{{ code }}">COPY</button>
      <hr/>
      <code lang="js">{{ code }}</code>
      <br>
      <input type="text" [(ngModel)]="code">
      <br>
      <hr>
      <br>
      <app-child></app-child>
      <br>
      <hr>
      <br>
      <pane-component></pane-component>
    </main>
  `,
  styles: [".container{  margin: auto; width: 80%; }"],
})
export class AppComponent implements OnInit {
  code = `const array = [1, 2, 3, 4, 5];`;

  ngOnInit(): void {
    console.log('Application Started!')
  }

  public showAlert(from: string = 'AppComponent') {
    alert('Aha! Called from: ' + from)
  }
}
