
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Models/Product';
import { PoductService } from '../services/product.service';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: product[];
  constructor(private productService: PoductService,
    private productHttpService: ProductHttpService,
    private router: Router) {
    // this.products = this.productService.getProducts();
    this.productHttpService.getPizzas().subscribe((pizzaData) => {
      console.log(pizzaData);
      this.products = pizzaData as product[];
    })
  }

  ngOnInit(): void {
  }

  change() {
    this.products[0] = new product(103, "asjkdfha", 20, 90, './assets/images/DeepakID.jpg')
  }

  deleteProd( ) {
    this.productHttpService.deleteProduct(this.products[0].id).subscribe(deleteProduct => {
      //console.log(pizzaData); 
      this.router.navigateByUrl('products');
    })
  }
}


