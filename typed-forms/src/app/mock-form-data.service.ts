import { Injectable } from "@angular/core";
import { of } from "rxjs";

type Shipment = {
  id: string;
  containers: {
    trackingCode: string;
    items: {
      name: string;
      amount: number;
    }[];
  }[];
}[];

@Injectable({
  providedIn: "root",
})
export class MockFormDataService {
  getData() {
    const MOCK_DATA: Shipment = [
      {
        id: "Shipment #1",
        containers: [
          {
            trackingCode: "#A1",
            items: [
              { name: "Item 1", amount: 1 },
              { name: "Item 2", amount: 2 },
            ],
          },
          {
            trackingCode: "#A2",
            items: [
              { name: "Item 1", amount: 2 },
              { name: "Item 3", amount: 5 },
            ],
          },
          {
            trackingCode: "#A3",
            items: [
              { name: "Item 5", amount: 2 },
              { name: "Item 1", amount: 5 },
              { name: "Item 4", amount: 2 },
            ],
          },
        ],
      },
      {
        id: "Shipment #2",
        containers: [
          {
            trackingCode: "#B1",
            items: [
              { name: "Item 1", amount: 5 },
              { name: "Item 4", amount: 2 },
            ],
          },
          {
            trackingCode: "#B2",
            items: [
              { name: "Item 2", amount: 3 },
              { name: "Item 3", amount: 1 },
              { name: "Item 5", amount: 10 },
            ],
          },
        ],
      },
    ];

    return of(MOCK_DATA);
  }
}
