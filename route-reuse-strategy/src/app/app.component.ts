import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h2>Route Reuse Strategy</h2>
      <a routerLink="products">Products</a>
      <router-outlet/>
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
