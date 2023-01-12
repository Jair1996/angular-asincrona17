import { Injectable } from '@angular/core';
import { products } from '../data/prroducts';
import { Product } from '../interfaces/product.inteface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<Product> = products;

  constructor() {}

  getProductById(id: number): Product | null {
    return this.products.find((product) => product.id === id) || null;
  }
}
