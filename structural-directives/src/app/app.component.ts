import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav style="display: flex; gap: .5rem">
      <button (click)="handleNavigation('BASIC')">Basic Implementation</button>
      <button (click)="handleNavigation('CONTEXT')">With Context</button>
    </nav>
    <hr />
    <div [ngSwitch]="screen">
      <app-basic-implementation *ngSwitchCase="'BASIC'"></app-basic-implementation>
      <app-context-implementation *ngSwitchCase="'CONTEXT'"></app-context-implementation>
    </div>
  `,
})
export class AppComponent {
  public screen: "BASIC" | "CONTEXT" = "BASIC";

  handleNavigation(screen: typeof this.screen) {
    this.screen = screen;
  }
}
