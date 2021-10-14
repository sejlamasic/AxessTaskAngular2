import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './products.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products!:Product[];
  constructor(private productService:ProductService,
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.GetProducts();
  }
  GetProducts(){
    this.productService.GetAllProducts().subscribe((data:any)=>{
      this.products=data;
    })
  }
  onDeleteProduct(id:number){
    this.productService.DeleteProduct(id).subscribe(
      (res:any)=>{
        this.products=res;
      }
      )};
   onEditProduct(id:number){
    this.router.navigate([`${id}`],{relativeTo:this.route});
      }
  }




