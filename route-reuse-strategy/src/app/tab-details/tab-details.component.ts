import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductServiceService} from "./product-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tab-details',
  template: `
      <div class="container" *ngIf="product$ | async as product">
          <h1>{{product.title}}</h1>
          <p>{{product.description}}</p>
          <hr>
          <p style="text-align: right">Price: {{product.price}}</p>
      </div>
      <div *ngIf="(product$ | async) === undefined">
          <h1>Hmm, I couldn't find the product with id {{tabId}}</h1>
          <p>Try searching another?</p>
      </div>
  `,
  styles: [
    '.container { padding: 0 2rem 5rem 2rem; }'
  ]
})
export class TabDetailsComponent implements OnInit {
  tabId: string;

  product$?: Observable<Product>;

  constructor(private activatedRouteSnapshot: ActivatedRoute, private readonly productService: ProductServiceService) {
    this.tabId = activatedRouteSnapshot.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct(+this.tabId);
  }
}
