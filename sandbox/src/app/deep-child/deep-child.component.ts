import {Component} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-deep-child',
  template: `
    <button (click)="handleClick()">DeepChild Alert</button>
  `,
  styles: [
  ]
})
export class DeepChildComponent {

  constructor(private appComponent: AppComponent) {}

  handleClick() {
    this.appComponent.showAlert('DeepChildComponent')
  }

}
