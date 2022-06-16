import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <main class="container">
      <h1 style="text-align: center;">Template Variables</h1>
      <p>
        A Template Variable, as its name suggests, is a way to store the
        template reference into a variable
      </p>
      <p>This is analogous to the useRef from React</p>
      <p>Some examples</p>
      <section>
        <p>
          Lets say we have a input. This input has a template variable of
          <code>#input</code>. This variable will represents the
          HTMPInputElement that it's sitting on
        </p>
        <input #input type="text" name="text-input" id="text-input" />
        <p>
          Now, it's possible to reference it into other parts of the template,
          for example, logging its value when a button is clicked!
        </p>
        <button (click)="handleLog(input.value)">Log #input value</button>
      </section>
      <hr />
      <section>
        <p>
          As for ngTemplates, the Template Variable will refer to its
          TemplateRef instance that represents the template
        </p>
        <p>For example, we can toggle elements with this logic</p>
        <button (click)="handleToggle()">Toggle Me</button>
        <br />
        <br />
        <ng-template #templateRef>
          <span>You can see me now!</span>
        </ng-template>
        <ng-container
          *ngTemplateOutlet="isVisible ? templateRef : null"
        ></ng-container>
      </section>
      <hr />
      <section>
        <p>
          And when it comes for Angular Components, the Template Variable refers
          to the Component instance
        </p>
        <app-dummy-component
          #dummyComponent
          inputValue="A input value"
        ></app-dummy-component>
        <button (click)="dummyComponent.handleChangeValue(input.value)">
          Change DummyComponentComponent with #input.value
        </button>
        <ul>
          <li>
            <b>DummyComponentComponent.inputValue: </b
            >{{ dummyComponent.inputValue }}
          </li>
          <li>
            <b>DummyComponentComponent.anotherValue: </b
            >{{ dummyComponent.anotherValue }}
          </li>
        </ul>
      </section>
    </main>
  `,
  styles: [".container{  margin: auto; width: 80%; }"],
})
export class AppComponent implements OnInit {
  title = "template-variables";
  isVisible = true;

  handleLog(value: string) {
    console.log(value);
  }

  handleToggle() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
    console.log("Yolo");
  }
}
