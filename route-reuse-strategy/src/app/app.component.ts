import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="navigation">
        <ul>
          <li *ngFor="let tab of tabs"><a [routerLink]="'products/' + tab.id" routerLinkActive="active">{{tab.label}}</a></li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet/>
      </main>
    </div>
  `,
})
export class AppComponent {
  tabs = [
    {label: 'Tab 1', id: '1'},
    {label: 'Tab 2', id: '2'},
    {label: 'Tab 3', id: '3'},
  ]
}
