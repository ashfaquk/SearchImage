import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AuthenticationGuard } from './authentication.guard';
import { CartComponent } from './cart/cart.component';
import { DisplayHistoryComponent } from './display-history/display-history.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EmployeesComponent } from './employees/employees.component';
import { HistoryComponent } from './history/history.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './login/login.component';
import { SearchImage } from './Models/serachimage';
import { PostComponent } from './post/post.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component'; 
import { RegisterComponent } from './register/register.component'; 
import { SearchimageComponent } from './searchimage/searchimage.component';
import { UnderstandComponent } from './understand/understand.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'edit', component: EditProductComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthenticationGuard] },
  { path: 'reg', component: RegisterComponent },
  {
    path: 'list', component: ListproductComponent, children: [
      { path: 'details/:pid', component: ProductdetailComponent }
    ]
  },

  { path: 'details/:pid', component: ProductdetailComponent },
  { path: '', component: UnderstandComponent },
  { path: 'emp', component: EmployeesComponent },
  { path: 'post', component: PostComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'images', component: SearchimageComponent },
  { path: 'SH', component: DisplayHistoryComponent },
  { path: 'viewhis/:keyword', component: HistoryComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
