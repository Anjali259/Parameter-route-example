import { Injectable } from '@angular/core';
import { Product } from './product/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts() {

    let products:Product[];

    products=[
        new Product(1,'Memory Card',500),
        new Product(2,'Pen Drive',750),
        new Product(3,'Power Bank',100),
        new Product(4,'Anjali',200)
    ]

    return products;               
}


// public getProduct(id) {
 // let products:Product[]=this.getProducts();
 // return products.find(p => p.productID==id);
//}

  constructor() { }
}
