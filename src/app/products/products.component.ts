import { Component, inject } from '@angular/core';
import { ProductType } from '../interface/TypeData';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products : ProductType[]
constructor(){
  this.products = []
}
ngOnInit(){
  this.getProducts()
}
httpClient = inject(HttpClient) 
getProducts(){
  this.httpClient.get('https://dummyjson.com/products')
  .subscribe((res:any)=>{
    console.log(res)
    this.products = res.products
  })
}
}
