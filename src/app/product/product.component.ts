
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { product } from '../Models/Product';
import { CartService } from '../services/cart.service';
import { PoductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dob: Date;
  @Input() product: product = new product();
  @Output() buyPizzaEvent = new EventEmitter<number>();
  constructor(private cartService: CartService, private productService: PoductService) {
    this.dob = new Date(2022, 10, 12)
  }

  ngOnInit(): void {
    console.log('init');
  }
  checkQuanity() {
    if (this.product != undefined)
      return this.product.quantity ?? 0;
    return 0;
  }
  buyPizza() {

    var myProd = new product();
    myProd.quantity = 1;
    myProd.price = this.product.price ?? 0;
    myProd.pic = this.product.pic;
    myProd.name = this.product.name;
    myProd.id = this.product.id;
    console.log(myProd)
    this.cartService.addToCart(myProd);
    this.product.quantity = this.product.quantity ? this.product.quantity - 1 : 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change triggered")
    console.log(changes);
  }

}



