import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { customer } from '../Models/customer';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customers/add-customers.component';
import { CustomerService } from './services/customer.service';
import { ProductComponent } from './product/product.component';
import { PoductService } from './services/product.service';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';
import { CartService } from './services/cart.service';
import { TextPipe } from './text.pipe';
import { ShowchangeDirective } from './showchange.directive';
import { PaymentComponent } from './payment/payment.component';
import { CardformatDirective } from './cardformat.directive';
import { RegisterComponent } from './register/register.component';
import { UserDirective } from './user.directive';
import { UserService } from './services/user.service';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UnderstandComponent } from './understand/understand.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { PostComponent } from './post/post.component';
import { BlogPostService } from './services/blogpost.service';
import { ProductHttpService } from './services/producthttp.service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchimageComponent } from './searchimage/searchimage.component';
import { SearchImageService } from './services/searchimage.service';
import { WeatherService } from './services/weather.service';
import { DisplayHistoryComponent } from './display-history/display-history.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent,
    AddCustomerComponent,
    ProductComponent,
    CartComponent,
    EditProductComponent,
    ProductsComponent,
    TextPipe, ShowchangeDirective, PaymentComponent, CardformatDirective,
    RegisterComponent, UserDirective, ListproductComponent, ProductdetailComponent,
    UnderstandComponent, EmployeeComponent, EmployeesComponent, PostComponent, AddproductComponent,
    WeatherComponent, SearchimageComponent, DisplayHistoryComponent, HistoryComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService, PoductService, CartService, UserService, BlogPostService, ProductHttpService, SearchImageService, WeatherService],
  bootstrap: [AppComponent, customer]
})
export class AppModule { }
