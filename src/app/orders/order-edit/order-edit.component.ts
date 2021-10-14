import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../orders.service';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
orders:any={};
  constructor(private route:ActivatedRoute,
    private router:Router,
    public orderService:OrderService) { }
  ordersForm=new FormGroup({
    shipName:new FormControl(''),
    customerId:new FormControl(''),
    employeeid:new FormControl(''),
    orderDate:new FormControl(''),
    requiredDate:new FormControl(''),
    shippedDate:new FormControl(''),
    shipVia:new FormControl(''),
    freight:new FormControl(''),


      });
  ngOnInit(): void {
    this.orderService.GetAllOrders().subscribe(
      res=>{
        this.orders=res;
      }
    );
    this.orderService.GetOrderById(this.route.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.ordersForm=new FormGroup({
          shipName:new FormControl(res['shipName']),
          customerId:new FormControl(res['customerId']),
          employeeid:new FormControl(res['employeeId']),
          orderDate:new FormControl(res['orderDate']),
          requiredDate:new FormControl(res['requiredDate']),
          shippedDate:new FormControl(res['shippedDate']),
          shipVia:new FormControl(res['shipVia']),
          freight:new FormControl(res['freight']),
        })
      }
    );
  }

  onSubmit(){
    this.orderService.UpdateOrder(this.route.snapshot.params.id,this.ordersForm.value).subscribe(
      res=>{
        console.log('edit',res);
      },
      err=>{
        console.log(err);
      }
    );
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
