import { Component } from "@angular/core";

enum TabsEnum {
  TAB1 = 'TAB1',
  TAB2 = 'TAB2',
  TAB3 = 'TAB3'
}

@Component({
  selector: "app-root",
  template: `
    <main class="container">
      <h1 style="text-align: center;">NgSwitch</h1>

      <div style="display: flex; gap: 1rem;">
        <button (click)="handleTabChange(TabsEnum.TAB1)">Tab 1</button>
        <button (click)="handleTabChange(TabsEnum.TAB2)">Tab 2</button>
        <button (click)="handleTabChange(TabsEnum.TAB3)">Tab 3</button>
      </div>

      <section [ngSwitch]="tab">
        <p *ngSwitchCase="TabsEnum.TAB1">Tab 1 is selected</p>
        <p *ngSwitchCase="TabsEnum.TAB2">Tab 2 is selected</p>
        <p *ngSwitchCase="TabsEnum.TAB3">Tab 3 is selected</p>
      </section>
    </main>
  `,
  styles: [".container{  margin: auto; width: 80%; }"],
})
export class AppComponent {
  TabsEnum = TabsEnum;
  public tab: TabsEnum = TabsEnum.TAB1;

  handleTabChange(newTab: TabsEnum) {
    this.tab = newTab;
  }
}
