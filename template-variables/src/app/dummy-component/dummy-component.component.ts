import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-component',
  template: `
    <p style="border: 1px solid black;">
      I'm a DUMMY COMPONENT
    </p>
  `,
  styles: [
  ]
})
export class DummyComponentComponent implements OnInit {

  @Input()
  public inputValue: string;
  public anotherValue = 'Other value';

  handleChangeValue(value: string) {
    this.anotherValue = value;
  }

  ngOnInit(): void {
  }
}
