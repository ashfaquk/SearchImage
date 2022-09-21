import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Models/Product';
import { PoductService } from '../services/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products: product[]
  constructor(private productService: PoductService,
    private router: Router) {
    this.products = this.productService.getProducts();
  }
  showDetails(pid) {
    this.router.navigate(['list/details',pid])
  }
  ngOnInit(): void {
  }
}
