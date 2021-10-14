import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "./category.model";


@Injectable( {providedIn: 'root'})
export class CategoryService{
  readonly APIUrl="http://localhost:54911";
  categories!:Category[];
  constructor(private http:HttpClient){

  }
  GetAllCategories(){
    return this.http.get(`${this.APIUrl}/api/Categories`);
  }
  GetCategoryById(id:any){
    return this.http.get(`${this.APIUrl}/api/Categories/${id}`);
  }
  UpdateCategory(id:number,val:any){
return this.http.put(`${this.APIUrl}/api/Categories/${id}`,val);
  }
  DeleteCategory(id:any){
    return this.http.delete(`${this.APIUrl}/api/Categories/${id}`);
}
}
