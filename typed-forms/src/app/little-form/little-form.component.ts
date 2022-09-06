import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { MockFormDataService } from "../mock-form-data.service";

interface ShipmentForm {
  sChecked: FormControl<boolean>;
  id: FormControl<string>;
  containers: FormArray<
    FormGroup<{
      cChecked: FormControl<boolean>;
      trackingCode: FormControl<string>;
      items: FormArray<FormControl<number>>;
    }>
  >;
}

@Component({
  selector: "app-little-form",
  template: `
    <div
      [formGroup]="shipmentGroup"
      *ngFor="let shipmentGroup of form.controls; index as sIndex"
    >
      <input type="checkbox" formControlName="sChecked" /> -
      {{ shipmentGroup.get("id")?.value }}
      <div
        [formGroup]="containerGroup"
        *ngFor="let containerGroup of getContainers(sIndex).controls"
      >
        <input type="checkbox" formControlName="cChecked" /> -
        {{ containerGroup.get("trackingCode")?.value }}
      </div>
    </div>
    <br>
    <button (click)="handleSubmit()">TEST</button>
  `,
  styles: [],
})
export class LittleFormComponent implements OnInit {
  public form!: FormArray<FormGroup<ShipmentForm>>;

  constructor(private formDataService: MockFormDataService) {}

  getContainers(index: number) {
    return this.form.controls[index].get(
      "containers"
    ) as ShipmentForm["containers"];
  }

  ngOnInit(): void {
    this.formDataService.getData().subscribe((shipments) => {
      // Mapping
      const mappedForm = shipments.map(
        (shipment) =>
          new FormGroup({
            sChecked: new FormControl(false, { nonNullable: true }),
            id: new FormControl(shipment.id, { nonNullable: true }),
            containers: new FormArray(
              shipment.containers.map(
                (container) =>
                  new FormGroup({
                    cChecked: new FormControl(false, { nonNullable: true }),
                    trackingCode: new FormControl(container.trackingCode, { nonNullable: true }),
                    items: new FormArray(
                      container.items.map(
                        (item) => new FormControl(item.amount, { nonNullable: true })
                      )
                    ),
                  })
              )
            ),
          })
      );

      this.form = new FormArray(mappedForm);
    });
  }

  public handleSubmit() {
    console.log(this.form.getRawValue());
  }
}
