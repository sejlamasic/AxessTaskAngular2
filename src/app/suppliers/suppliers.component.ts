import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from './supplier.model';
import { SupplierService } from './suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
suppliers!:Supplier[];
  constructor(private supplierService:SupplierService,
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.GetSuppliers();
  }

  GetSuppliers(){
this.supplierService.GetAllSuppliers().subscribe((data:any)=> {
  console.log(data);
  this.suppliers=data;
})
  }
  onEditSupplier(id:number){
    this.router.navigate([`${id}`],{relativeTo:this.route});
  }
  onDeleteSupplier(id:number){
   this.supplierService.DeleteSupplier(id).subscribe(
    (res:any)=>{
      this.suppliers=res;
    }
    )};
}
