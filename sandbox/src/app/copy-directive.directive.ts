import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { fromEvent, of, skipWhile, Subscription, switchMap } from "rxjs";

@Directive({
  selector: "[appCopyDirective]",
})
export class CopyDirectiveDirective implements OnInit, OnDestroy {
  private clickSubscription!: Subscription;

  @Input()
  public appCopyDirective!: string;

  constructor(
    private host: ElementRef<HTMLElement>,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    // Using zone to avoid running unnecessary changes detections.
    this.zone.runOutsideAngular(() => {
      this.clickSubscription = fromEvent(this.host.nativeElement, "click")
        .pipe(
          skipWhile(() => {
            return !this.appCopyDirective;
          }),
          switchMap(() => {
            return navigator.clipboard.writeText(this.appCopyDirective);
          })
        )
        .subscribe(() => {
          window.alert("Copy successful!");
        });
    });
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }
}
