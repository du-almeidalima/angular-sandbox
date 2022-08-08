import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Customizable Table with *ngTemplateOutlet</h1>
    <p>
      With *ngTemplateOutlet we can inject template as we do in React via props. The TableComponent accept template
      references and injects them into its html via *ngTemplateOutlet.
    </p>
    <h2>Default table with no customization</h2>
    <app-table [data]="data"></app-table>
    <h2>Table with customized template</h2>
    <app-table [data]="data">
      <ng-template #headerTemplate>
        <th style="background-color: teal; color: white">City Name</th>
        <th style="background-color: orangered; color: white">Code</th>
      </ng-template>
      <!-- This entry will be iterated over -->
      <ng-template #rowTemplate let-row>
        <td>City of {{row.city}}</td>
        <td>{{row.code | uppercase}}</td>
        <td *ngIf="row.code === 'sp' || row.code === 'mg'">
          <button (click)="handleTeleportation(row.code)">Teleport Now!</button>
        </td>
      </ng-template>
    </app-table>
  `,
  styles: []
})
export class AppComponent {
  data = [
    {city: 'São Paulo', code: 'sp'},
    {city: 'Rio de Janeiro', code: 'rj'},
    {city: 'Mato Grosso', code: 'mt'},
    {city: 'Minas Gerais', code: 'mg'},
    {city: 'Santa Catarina', code: 'sc'},
  ]
  
  handleTeleportation(destination: string) {
    alert('You have been teleported to ' + destination);
  }
}
