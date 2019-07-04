import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';


 
@Component({
  templateUrl: './product.component.html',
})
 
export class ProductComponent
{
 
   products:Product[];
   
   constructor(private productService: ProductService){
   }
 
   ngOnInit() {
    this.products=this.productService.getProducts();
  }
  
 
}
 