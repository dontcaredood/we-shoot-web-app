import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { LoginComponent } from './login/login.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'view-orders', component: ViewOrdersComponent, canActivate: [AuthGuard]},
  { path: 'order/:id', component:ViewOrderDetailsComponent, canActivate: [AuthGuard]},
  { path: 'invoice/:id', component:ViewInvoiceComponent, canActivate: [AuthGuard]},
  { path: 'add-order', component: AddOrderComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
