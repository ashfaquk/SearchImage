////import { Component, OnInit } from '@angular/core';

////@Component({
////  selector: 'app-customer',
////  templateUrl: './customer.component.html',
////  styleUrls: ['./customer.component.css']
////})
////export class CustomerComponent implements OnInit {
////  CutomerName: string;
////  CutomerAge: string;
////  CutomerPhone: string;

////  constructor() {
////    this.CutomerName = "";
////    this.CutomerAge = "";
////    this.CutomerPhone = "";
////  }

////  ngOnInit(): void {
////  }

////}



import { Component, OnInit } from '@angular/core';
import { customer } from '../Models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:customer;
  constructor() { 
    this.customer = new  customer(101,"Tim",21,"./assets/images/Pizza1.jpg")
  }

  ngOnInit(): void {
  }

}

