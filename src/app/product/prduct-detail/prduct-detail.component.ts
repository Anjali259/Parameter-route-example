import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-prduct-detail',
  templateUrl: './prduct-detail.component.html',
  styleUrls: ['./prduct-detail.component.css']
})
export class PrductDetailComponent implements OnInit {

  public Productid;
   product: Product;

// Using subscribe method 
  sub;

  constructor(private router: Router, private Activatedroute: ActivatedRoute, private _prodctService: ProductService) { }

  ngOnInit() {

    this.sub = this.Activatedroute.paramMap.subscribe((params: ParamMap)=> { 
      // this.id = params.get('id'); 
      let id =  parseInt(params.get('id'));
      this.Productid = id;
      let products=this._prodctService.getProducts();
      this.product=products.find(p => p.productID==this.Productid);    

   });

  }

  //we can unsubscribe by below method
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  onBack(): void {
    this.router.navigate(['product']);
 }

}
