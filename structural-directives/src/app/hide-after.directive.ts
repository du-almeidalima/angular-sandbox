import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[hideAfter]",
})
export class HideAfterDirective implements OnInit, OnDestroy {
  private timeoutId!: NodeJS.Timeout;

  @Input("hideAfter")
  public delay = 1000;

  @Input("hideAfterHiddenTemplate")
  public hiddenTemplate: TemplateRef<any> | undefined;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);

    setTimeout(() => {
      this.timeoutId = setTimeout(() => {
        this.viewContainerRef.clear();

        if (this.hiddenTemplate) {
          this.viewContainerRef.createEmbeddedView(this.hiddenTemplate);
        }
      });
    }, this.delay);
  }

  ngOnDestroy(): void {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
