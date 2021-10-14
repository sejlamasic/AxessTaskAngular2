export class Category{
      public categoryId:number;
      public categoryName:string ;
      public description:string;
   constructor(id:number,description:string, name:string){
    this.description=description;
    this.categoryId=id;
    this.categoryName=name;

   }
  }
