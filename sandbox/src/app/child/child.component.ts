import {Component} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-child',
  template: `
    <button (click)="handleClick()">Child Alert</button>
    <hr>
    <app-deep-child></app-deep-child>
  `,
  styles: [
  ]
})
export class ChildComponent {

  constructor(private appComponent: AppComponent) {}
  
  handleClick() {
    this.appComponent.showAlert('ChildComponent')
  }
}
