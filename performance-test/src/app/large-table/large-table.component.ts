import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-large-table',
  template: `
      <button (click)="increaseCount()">
          Increment <code>{{count}}</code>
      </button>
      <hr/>
      <table>
          <thead>
          <tr>
              <th>Factor</th>
              <th></th>
              <th>Count</th>
              <th></th>
              <th>Product</th>
          </tr>
          </thead>
          <tbody>
          <tr app-large-table-row *ngFor="let num of numberArray"
              [product]="num * count"
              [value]="num"
              [count]="count"
          ></tr>
          </tbody>
      </table>
  `,
  styles: []
})
export class LargeTableComponent implements OnInit {
  numberArray: number[] = [];
  
  count = 0;

  ngOnInit(): void {
    for (let i = 0; i < 1000; i++) {
      this.numberArray.push(this.getRandomNumber());
    }
  }

  getRandomNumber(){
    return Math.floor(Math.random() * 10);
  };
  
  increaseCount() {
    this.count += 1;
    this.numberArray = [];

    for (let i = 0; i < 1000; i++) {
      this.numberArray.push(this.getRandomNumber());
    }
  }
}
