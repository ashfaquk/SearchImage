import { Component, OnInit } from '@angular/core';
import { product } from '../Models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: product[];
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

}
