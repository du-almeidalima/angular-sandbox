import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  styles: [
    `
      .banner {
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        background-color: teal;
      }

      .banner h2 {
        font-weight: bold;
        font-family: arial;
      }
    `,
  ],
  template: `
    <h1>Structural Directives</h1>
    <section
      class="banner"
      *hideAfter="5000; hiddenTemplate: displayWhenHidden"
    >
      <h2>Temporary Content</h2>
      <p>This should disappear in 5 seconds</p>
    </section>

    <ng-template #displayWhenHidden> I'm gone! </ng-template>

    <hr />

    <section *unless="someBoolean">
      <h2>Unless Directive</h2>
    </section>
  `,
})
export class AppComponent implements OnInit {
  public someBoolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.someBoolean = false;
    }, 2000);
  }
}
