import { Component, OnInit } from '@angular/core';
import { customer } from '../Models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: customer;
  constructor(private customerService: CustomerService) {
    this.customer = new customer();
  }

  ngOnInit(): void {
  }
  insertCustomer(cpic: any) {

    this.customer.pic = "./assets/images/" + cpic.files[0].name;
    console.log(this.customer.pic);
    this.customerService.addcustomer(this.customer);
    this.customer = new customer();
    alert('customer added');
  }

}
