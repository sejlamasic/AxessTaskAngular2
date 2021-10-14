import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "./order.model";



@Injectable( {providedIn: 'root'})
export class OrderService{
  readonly APIUrl="http://localhost:54911";

  orders!:Order[];
  constructor(private http:HttpClient){

  }
  GetAllOrders(){
    return this.http.get(`${this.APIUrl}/api/Orders`);
  }
  GetOrderById(id:any){
    return this.http.get(`${this.APIUrl}/api/Orders/${id}`);
  }
  DeleteOrder(id:any){
    return this.http.delete(`${this.APIUrl}/api/Orders/${id}`);
  }
  UpdateOrder(id:number,val:any){
    return this.http.put(`${this.APIUrl}/api/Orders/${id}`,val);
      }
}
