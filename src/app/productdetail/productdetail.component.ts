import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../Models/Product';
import { PoductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  pid: any;
  product: product
  constructor(private activatedRoute: ActivatedRoute,
    private productservice: PoductService) {
    //this.pid = this.activatedRoute.snapshot.params["pid"];
    //this.product = this.productservice.getProductById(this.pid);

    //this.activatedRoute.params.subscribe((data) => {
    //  this.pid = data['pid'];
    //  this.product = this.productservice.getProductById(this.pid);
    //});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ashfaq")
  }


  ngDoCheck() {
    console.log('do check triggered')
    this.pid = this.activatedRoute.snapshot.params["pid"];
    this.product = this.productservice.getProductById(this.pid)
  }

  ngOnInit(): void {
  }

}
