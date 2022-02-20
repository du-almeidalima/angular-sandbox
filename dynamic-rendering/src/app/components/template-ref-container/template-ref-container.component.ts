import {AfterViewInit, Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-template-ref-container',
  template: `
    <div (mousemove)="handleMouseMove($event)">
      <ng-container *ngTemplateOutlet="template; context: state"></ng-container>
    </div>
  `,
  styles: [
    `div {
      border: 1px solid black;
      padding: 5rem 2rem;
    }`
  ]
})
export class TemplateRefContainerComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    console.log(this.template)
  }

  ngAfterViewInit(): void {
    console.log(this.template)
  }

  state = {x: 0, y: 0}

  @ContentChild(TemplateRef)
  template!: TemplateRef<any>;

  constructor() {
  }

  handleMouseMove(event: MouseEvent) {
    this.state = {
      x: event.clientX,
      y: event.clientY
    }
  }
}
