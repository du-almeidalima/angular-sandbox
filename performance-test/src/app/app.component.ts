import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Performance Test Based on the Million Test</h1>
    <app-lag-radar />
    <app-large-table />
  `,
  styles: []
})
export class AppComponent {
  title = 'performance-test';
}
