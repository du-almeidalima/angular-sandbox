import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-context-implementation",
  template: `
    <h1>Structural Directives with Context</h1>
    <section
      class="banner banner--active"
      *contextHideAfter="
        5000 as time;
        hiddenTemplate: displayWhenHidden;
        let counter = counter;
        let myDefault
      "
    >
      <h2>
        Temporary Content. The time (T) was injected by the context via
        <code>"as time" with the value of {{ time }}</code>
      </h2>
      <p>This should be disabled in T:{{ counter }} ms</p>
      <p>A value provided via $implicit: {{ myDefault }}</p>
    </section>

    <ng-template #displayWhenHidden let-time="contextHideAfter" let-myDefault>
      <section class="banner banner--inactive">
        <h2>Content Disabled</h2>
        <p>
          This content was replaced by this Disabled Content by the
          *contextHideAfter directive after {{ time }} ms.
        </p>
        <p>A value provided via $implicit: {{ myDefault }}</p>
      </section>
    </ng-template>
  `,
})
export class ContextImplementationComponent implements OnInit {
  public someBoolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.someBoolean = false;
    }, 2000);
  }
}
