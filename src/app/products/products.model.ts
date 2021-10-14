
import { Category } from "../categories/category.model";
import { Supplier } from "../suppliers/supplier.model";

export class Product{
  public productId:number;
  public productName:string;
   public supplierID:number;
   public supplier:Supplier;
   public categoryID:number;
   public category:Category;
   public quantityPerUnit:string;
   public unitPrice:number;
   public unitsInStock:number;
   public unitsOnOrder:number;
   public reorderLevel:number;
   public discounted:string;

   constructor(
       id:number,
       name:string,supplierID:number, supplier:Supplier,categoryID:number, category:Category,quantityPerUnit:string,
        unitPrice:number,unitsInStock:number,unitsOnOrder:number,reorderlevel:number,discounted:string){

       this.productId=id;
        this.productName=name;
        this.supplierID=supplierID;
        this.supplier=supplier,
        this.categoryID=categoryID;
        this.category=category;
        this.quantityPerUnit=quantityPerUnit;
        this.unitPrice=unitPrice;
        this.unitsInStock=unitsInStock;
        this.unitsOnOrder=unitsOnOrder;
        this.reorderLevel=reorderlevel;
        this.discounted=discounted;

   }
}
