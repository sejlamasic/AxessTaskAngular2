import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';

import { OrdersComponent } from './orders/orders.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';
import { StartComponent } from './start/start.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';

import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',

  },

{path:'start', component:StartComponent},
{path:'categories',component:CategoriesComponent,
children:[
  // {path:'edit/:id',component:CategoryEditComponent},

]},
 {path:'categories/:id',component:CategoryEditComponent},
{path:'products',component:ProductsComponent},
{path:'products/:id',component:ProductEditComponent},
{path:'orders',component:OrdersComponent},
{path:'orders/:id',component:OrderEditComponent},
{path:'suppliers',component:SuppliersComponent},
{path:'suppliers/:id', component:SupplierEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
