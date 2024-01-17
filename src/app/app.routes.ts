import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

export const routes: Routes = [
    {path: "", component: ProductsComponent},
    {path: "product/:id", component: DetailProductComponent},
];
