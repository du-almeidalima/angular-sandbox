import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-implementation",
  template: `
    <h1>Structural Directives</h1>
    <section
      class="banner banner--active"
      *hideAfter="5000; hiddenTemplate: displayWhenHidden"
    >
      <h2>Temporary Content</h2>
      <p>This should be disabled in 5 seconds</p>
    </section>

    <ng-template #displayWhenHidden>
      <section class="banner banner--inactive">
        <h2>Content Disabled</h2>
        <p>This content was replaced by this Disabled Content by the *hideAfter directive</p>
      </section>
    </ng-template>

    <hr />

    <section *unless="someBoolean">
      <h2>Unless Directive</h2>
      <p>This directive is the opposite of *ngIf</p>
    </section>
  `,
})
export class BasicImplementationComponent implements OnInit {
  public someBoolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.someBoolean = false;
    }, 2000);
  }
}
