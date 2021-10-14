import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
products:any={};
  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

    productsForm=new FormGroup({
      name:new FormControl(''),
      category:new FormControl(''),
      supplier:new FormControl(''),
      quantityPerUnit:new FormControl(''),
      unitPrice:new FormControl(''),
      reorderLevel:new FormControl(''),



    });
  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      res=>{
        this.products=res;
      }
    );
    this.productService.GetProductById(this.route.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.productsForm=new FormGroup({
          name:new FormControl(res['name']),
          category:new FormControl(res['category']),
          supplier:new FormControl(res['supplier']),
          quantityPerUnit:new FormControl(res['quantityPerUnit']),
          unitPrice:new FormControl(res['unitPrice']),
          reorderLevel:new FormControl(res['reorderLevel']),

        })
      }
    );
  }
onSubmit(){
  this.productService.UpdateProduct(this.route.snapshot.params.id,this.productsForm.value).subscribe(
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
