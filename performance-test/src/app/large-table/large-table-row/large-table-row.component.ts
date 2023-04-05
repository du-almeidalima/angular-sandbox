import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: '[app-large-table-row]',
  template: `
    <td>{{value}}</td>
    <td>*</td>
    <td>{{count}}</td>
    <td>=</td>
    <td>{{product}}</td>
    <div>
      <!-- some filler nodes -->
      <ng-container *ngFor="let item of nodeArray">
        <div>
          <div></div>
        </div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class LargeTableRowComponent implements OnChanges {
  @Input()
  product!: number;

  @Input()
  count!: number;

  @Input()
  value!: number;

  nodeArray = Array(50).fill(0);

  ngOnChanges(changes: SimpleChanges): void {
    this.nodeArray = Array(50).fill(0);
  }
}
