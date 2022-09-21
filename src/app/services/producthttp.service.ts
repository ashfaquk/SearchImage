import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { product } from "../Models/Product";

@Injectable()
export class ProductHttpService{
    constructor(private httpClient:HttpClient){

    }
    getPizzas(){
        return this.httpClient.get("https://sampleapig3new.azurewebsites.net/api/Product")
  }

  addProduct(product: product) {
    return this.httpClient.post("https://sampleapig3new.azurewebsites.net/api/Product", product)
  }

  updateProduct(product: product) {
    return this.httpClient.put("https://sampleapig3new.azurewebsites.net/api/Product", product)
  }

  deleteProduct(id :number) {
    return this.httpClient.delete("https://sampleapig3new.azurewebsites.net/api/Product?pid=" + id)
  }
}

