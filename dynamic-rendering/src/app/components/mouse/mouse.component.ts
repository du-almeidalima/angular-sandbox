import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mouse',
  template: `
    <span>
      Mouse position is x: {{x}} and y: {{y}}
    </span>
  `
})
export class MouseComponent {

  @Input() x: number = 1;
  @Input() y: number = 1;

  constructor() {}
}
