import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
