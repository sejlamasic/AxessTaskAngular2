import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Supplier } from "./supplier.model";



@Injectable( {providedIn: 'root'})
export class SupplierService{
  readonly APIUrl="http://localhost:54911";
  suppliers!:Supplier[];
  constructor(private http:HttpClient){

  }
  GetAllSuppliers(){
    return this.http.get(`${this.APIUrl}/api/Suppliers`);
  }
  GetSupplierById(id:number){
    return this.http.get(`${this.APIUrl}/api/Suppliers/${id}`);
  }
  DeleteSupplier(id:number){
    return this.http.delete(`${this.APIUrl}/api/Suppliers/${id}`);
  }
  UpdateSupplier(id:number,val:any){
    return this.http.put(`${this.APIUrl}/api/Suppliers/${id}`,val);
      }
}
