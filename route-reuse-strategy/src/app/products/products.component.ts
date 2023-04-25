import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
      <nav class="navigation">
          <ul>
              <li *ngFor="let tab of tabs">
                  <a [routerLink]="'/products/list/' + tab.id" routerLinkActive="active">{{tab.label}}</a>
              </li>
          </ul>
      </nav>
      <main class="content">
          <router-outlet/>
      </main>
  `,
})
export class ProductsComponent {
  tabs = [
    {label: 'Tab 1', id: '1'},
    {label: 'Tab 2', id: '2'},
    {label: 'Tab 3', id: '3'},
  ]
}
