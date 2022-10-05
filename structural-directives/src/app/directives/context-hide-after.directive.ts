import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { delay } from "rxjs";

export interface HideAfterContext {
  // In order to be a valid Context this value should have the same name as the @Input
  // this allow us to do things like:
  // *contextHideAfter="1000 as hideAfter"
  contextHideAfter: number;
  // Since this property wasn't injected via parameter it doesn't need to have the prefix
  counter: number;
  // This value is provided/assigned to a template variable whenever we don't explicitly define it
  // like:
  // * In <ng-template>: let-someValue = "counter"
  // * In directive declaration with *: let someValue = counter
  $implicit: number;
}

@Directive({
  selector: "[contextHideAfter]",
})
export class ContextHideAfterDirective implements OnInit, OnDestroy {
  private intervalId!: NodeJS.Timeout;
  private _delay = 1;
  private context: HideAfterContext = {
    contextHideAfter: 1,
    counter: 1,
    get $implicit() {
      return this.contextHideAfter;
    },
  };

  @Input("contextHideAfter")
  public set delay(time: number) {
    this.context.contextHideAfter = time;
    this.context.counter = time;
    this._delay = time;
  }

  // This must be prefixed the name of the directive in order for the value to be injected
  @Input("contextHideAfterHiddenTemplate")
  public hiddenTemplate: TemplateRef<any> | undefined;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);

    this.intervalId = setInterval(() => {
      this.context.counter = this.context.counter - 1000;

      if (this.context.counter <= 0) {
        this.context.counter = 0;
        this.viewContainerRef.clear();

        if (this.hiddenTemplate) {
          this.viewContainerRef.createEmbeddedView(
            this.hiddenTemplate,
            this.context
          );
        }

        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.intervalId && clearTimeout(this.intervalId);
  }
}
