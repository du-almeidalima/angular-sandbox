import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
      <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="News"
      >
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
