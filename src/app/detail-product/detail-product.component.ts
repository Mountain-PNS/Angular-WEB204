import { Component, inject } from '@angular/core';
import { ProductType } from '../interface/TypeData';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {
products: ProductType
constructor(private router : ActivatedRoute) {
  this.products = {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [
      ""
    ]
  }
}
httpClinet = inject(HttpClient)
ngOnInit(){
const id = this.router.snapshot.paramMap.get('id')
this.getProdcutDetail(Number(id))
}
getProdcutDetail(id:number){
  this.httpClinet.get(`https://dummyjson.com/products/${id}`)
  .subscribe((res:any)=>{
    console.log(res)
    this.products = res
  })
}
}
