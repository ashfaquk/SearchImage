import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Models/Product';
import { PoductService } from '../services/product.service';
import { ProductHttpService } from '../services/producthttp.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: product;
  products: product[];
  constructor(private ProductService: PoductService, private router: Router,
    private productHttpService: ProductHttpService) {
    //this.product = new product();
    //this.products = this.ProductService.getProducts();
    this.productHttpService.getPizzas().subscribe((pizzaData) => {
      console.log(pizzaData);
      this.products = pizzaData as product[];
    })

  }



  getProduct(id: any) {

      this.product = this.ProductService.getProductById(id) ?? new product();
    //this.productHttpService.getPizzas().subscribe((pizzaData) => {
    //  //console.log(pizzaData);
    //  this.products = pizzaData as product[];
    //})

  }
  ngOnInit(): void {
  }

  updateProduct() {
    //this.ProductService.editProduct(this.product);
    //alert("Product details updated");
    //this.router.navigate(['products']);

    this.productHttpService.updateProduct(this.product).subscribe(updateProduct => {
      //console.log(pizzaData); 
      this.router.navigateByUrl('products');
    })
  }
}


