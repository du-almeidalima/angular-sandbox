import {AfterViewInit, Component, Directive, Input, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";

@Directive({selector: 'pane', standalone: true})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'pane-component',
  standalone: true,
  imports: [Pane, CommonModule],
  template: `
    <pane id="1" *ngIf="shouldShow"></pane>
    <pane id="2" *ngIf="!shouldShow"></pane>

    <button (click)="toggle()">Toggle</button>

    <div>Selected: {{selectedPane}}</div>
  `,
})
export class PaneComponent {
  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }

  selectedPane: string = '';
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}