import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from './order.model';
import { OrderService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders!:Order[];

  constructor(private orderService:OrderService,
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
    ) { }

  ngOnInit(): void {
  this.GetData();
}
GetData(){
  this.orderService.GetAllOrders().subscribe((data:any)=>{
    console.log(data);
    this.orders=data;
});
}
onEditOrder(id:number){
  this.router.navigate([`${id}`],{relativeTo:this.route});
}
onDeleteOrder(id:number){
  console.log("brisanje");
this.orderService.DeleteOrder(id).subscribe(
(res:any)=>{
  this.orders=res;
}
)};
}
