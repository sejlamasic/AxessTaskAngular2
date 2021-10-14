import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products.model";

@Injectable( {providedIn: 'root'})
export class ProductService{
  readonly APIUrl="http://localhost:54911";

  products!:Product[];
  constructor(private http:HttpClient){

  }
  GetAllProducts(){
    return this.http.get(`${this.APIUrl}/api/Products`);
  }
  GetProductById(id:number){
    return this.http.get(`${this.APIUrl}/api/Products/${id}`);
  }
  DeleteProduct(id:number){
    return this.http.delete(`${this.APIUrl}/api/Products/${id}`);
  }
  UpdateProduct(id:number,val:any){
    return this.http.put(`${this.APIUrl}/api/Products/${id}`,val);
      }
}
