import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Models/Product';
import { PoductService } from '../services/product.service';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product: product;
  constructor(private ProductService: PoductService, private router: Router,
    private productHttpService: ProductHttpService) {
    this.product =new  product;
  }
 
  ngOnInit(): void {
  }

  addprodt() {
    this.productHttpService.addProduct(this.product).subscribe(addproduct => {
      //console.log(pizzaData); 
      this.router.navigateByUrl('products');
    })
  }

}
