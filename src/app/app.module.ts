import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { FormsModule } from '@angular/forms';
import { YesNoPipe } from './yes-no.pipe';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateOrderDetailsComponent } from './update-order-details/update-order-details.component';
import { LoginComponent } from './login/login.component';
import { NavbarFullComponent } from './navbar-full/navbar-full.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewOrdersComponent,
    AddOrderComponent,
    YesNoPipe,
    ViewOrderDetailsComponent,
    NavbarComponent,
    UpdateOrderDetailsComponent,
    LoginComponent,
    NavbarFullComponent,
    DashboardComponent,
    FooterComponent,
    ViewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Add HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
