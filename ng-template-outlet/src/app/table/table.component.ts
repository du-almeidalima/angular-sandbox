import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-table[data]',
  template: `
    <table>
      <tr>
        <ng-container
          *ngTemplateOutlet="headerTemplate ?? defaultHeaderTemplate; context: {$implicit: data[0]}"
        ></ng-container>
      </tr>
      <tr *ngFor="let row of data">
        <ng-container
          *ngTemplateOutlet="rowTemplate ?? defaultRowTemplate; context: {$implicit: row}"
        ></ng-container>
      </tr>
    </table>

    <!-- Default Templates -->
    <ng-template #defaultHeaderTemplate let-firstRow>
      <th *ngFor="let property of firstRow | keyvalue">{{property.key}}</th>
    </ng-template>
    <ng-template #defaultRowTemplate let-row>
      <td *ngFor="let property of row | keyvalue">{{property.value}}</td>
    </ng-template>
  `,
  styles: [
    `table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }`]
})
export class TableComponent {
  @Input()
  data: any[] = []

  @ContentChild("headerTemplate")
  headerTemplate?: TemplateRef<any>

  @ContentChild("rowTemplate")
  rowTemplate?: TemplateRef<any>

}
