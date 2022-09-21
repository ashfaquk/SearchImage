import { customer } from "../Models/customer";

export class CustomerService {
  customers: customer[];

  constructor() {
    this.customers = [
      new customer(101, "Tim", 21, "./assets/images/DeepakID.jpg"),
      new customer(102, "Jim", 25, "./assets/images/DeepakID.jpg")
    ]
  }
  getCustomers() {
    return this.customers;
  }


  addcustomer(customer: customer) {
    this.customers.push(customer);
  }
}
