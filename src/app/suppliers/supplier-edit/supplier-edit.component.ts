import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../suppliers.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
suppliers:any={};
  constructor(private supplierService:SupplierService,
    private route:ActivatedRoute,
    private router:Router) { }
  suppliersForm=new FormGroup({
    id:new FormControl(''),
    companyName:new FormControl(''),
    contactName:new FormControl(''),
    contactTitle:new FormControl(''),

  });
  ngOnInit(): void {
    this.supplierService.GetAllSuppliers().subscribe(
      res=>{
        this.suppliers=res;
      }
    );
    this.supplierService.GetSupplierById(this.route.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.suppliersForm=new FormGroup({
          id:new FormControl(res['id']),
          companyName:new FormControl(res['companyName']),
          contactName:new FormControl(res['contactName']),
          contactTitle:new FormControl(res['contactTitle']),

        })
      }
    );
  }
  onSubmit(){
    this.supplierService.UpdateSupplier(this.route.snapshot.params.id,this.suppliersForm.value).subscribe(
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
