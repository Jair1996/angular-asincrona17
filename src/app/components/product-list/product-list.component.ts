import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.inteface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
