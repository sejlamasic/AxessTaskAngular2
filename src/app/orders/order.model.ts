

export class Order{
  public orderId:number;
  public customerId:string;
  public employeeId:number;
  public orderDate:DataTransfer;
  public requiredDate:DataTransfer;
  public shippedDate:string;
  public shipVia:number;
  public freight:number;
  public shipName:string;


   constructor(id:number,shipname:string, customerId:string,employeeId:number,
    orderDate:DataTransfer,requiredDate:DataTransfer,shippedDate:string,shipVia:number,
    freight:number ){
   this.orderId=id;
   this.shipName=shipname;
   this.customerId=customerId;
   this.employeeId=employeeId,
   this.orderDate=orderDate;
   this.requiredDate=requiredDate;
   this.shippedDate=shippedDate;
   this.shipVia=shipVia;
  this.freight=freight;


   }
  }
