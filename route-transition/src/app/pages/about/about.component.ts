import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
      <img
              src="https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Coffee"
      >
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
