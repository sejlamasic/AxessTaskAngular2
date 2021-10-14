import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
id!:number;
categories:any={};
  constructor(private route:ActivatedRoute,
    private router:Router,
    public categoryService:CategoryService
  ) {
    console.log('test456')
   }
  categoriesForm=new FormGroup({
  categoryName:new FormControl(''),
description:new FormControl('')
  });

  ngOnInit(): void {

    this.categoryService.GetAllCategories().subscribe(res=>{
      this.categories=res;
    });

    this.categoryService.GetCategoryById(this.route.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.categoriesForm=new FormGroup({
          categoryName:new FormControl(res['categoryName']),
          description:new FormControl(res['description'])
        })
      }
    );

  }
onSubmit(){
this.categoryService.UpdateCategory(this.route.snapshot.params.id,this.categoriesForm.value).subscribe(
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
