import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductPageComponent
  ],
  exports: [
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
