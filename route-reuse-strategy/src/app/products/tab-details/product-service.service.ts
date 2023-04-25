import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

//https://dummyjson.com/docs/products

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly URL = 'https://dummyjson.com/products';

  constructor(private readonly http: HttpClient) {
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
}
