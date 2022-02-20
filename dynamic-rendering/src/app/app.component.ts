import {Component, OnChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  ngOnChanges(): void {
    console.log('a')
  }

  title = 'dynamic-rendering';
}
