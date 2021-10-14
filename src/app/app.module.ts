import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { OrdersComponent } from './orders/orders.component';
import { StartComponent } from './start/start.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';







@NgModule({
  declarations: [
    AppComponent,
   ProductsComponent,
    SuppliersComponent,
    OrdersComponent,
    StartComponent,
    CategoriesComponent,
    CategoryEditComponent,
    OrderEditComponent,
    ProductEditComponent,
    SupplierEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
