import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories!:Category[];
id!:number;
  constructor(private categoryService:CategoryService,
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.GetCategories();
  }

  GetCategories(){
      this.categoryService.GetAllCategories().subscribe((data:any)=>{
        this.categories=data;
    })
  }
  onEditCategory(id: number){
    console.log('test');
    this.router.navigate([`${id}`],{relativeTo:this.route});
  }
  onDeleteCategory(id:number){
    console.log("brisanje");
this.categoryService.DeleteCategory(id).subscribe(
  (res:any)=>{
    this.categories=res;
  }
);
this.router.navigate(['/categories']);
  }
}
