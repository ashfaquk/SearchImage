import { product } from "../Models/Product";

export class PoductService {
  products: product[];

  constructor() {
    this.products = [
      new product(101, "Jeeans", 21, 5, "./assets/images/Pizza1.jpg"),
      new product(102, "Jim", 25, 5, "./assets/images/Pizza2.jpg"), 
    ]
  }
  getProducts() {
    return this.products;
  }


  getProductById(id: number) {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id == id) {
        return this.products[index];
      }
    }
    return undefined;
  }
  editProduct(newProduct: product) {
    var product = this.getProductById(newProduct.id ?? 0)
    if (product != undefined) {
      product.name = newProduct.name;
      product.quantity = newProduct.quantity;
      product.price = newProduct.price;
      product.pic = newProduct.pic;
    }
  }
}
