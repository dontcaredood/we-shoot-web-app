import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout_club/home/home.component';
import { DashboardComponent } from './layout_club/dashboard/dashboard.component';
import { ViewOrdersComponent } from './orders_club/view-orders/view-orders.component';
import { AddOrderComponent } from './orders_club/add-order/add-order.component';
import { ViewOrderDetailsComponent } from './orders_club/view-order-details/view-order-details.component';
import { OrderHistoryComponent } from './orders_club/order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { ViewInvoiceComponent } from './orders_club/view-invoice/view-invoice.component';
import { AuthGuard } from './services_club/auth.guard';
import { TrackOrderComponent } from './orders_club/track-order/track-order.component';
import { OrderViewComponent } from './orders_club/order-view/order-view.component';
import { GalleryComponent } from './layout_club/gallery/gallery.component';
import { AboutComponent } from './layout_club/about/about.component';
const routes: Routes = [
  { path: '***', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  {path:'about', component:AboutComponent},
  { path: 'view-orders', component: ViewOrdersComponent, canActivate: [AuthGuard]},
  { path: 'order/:id', component:OrderViewComponent, canActivate: [AuthGuard],
    children:[
      {
        path:'track', component:TrackOrderComponent,canActivate:[AuthGuard]
      }
    ]
  },
  { path: 'orderHistory/:id', component:OrderHistoryComponent, canActivate: [AuthGuard]},
  { path: 'invoice/:id', component:ViewInvoiceComponent, canActivate: [AuthGuard]},
  { path: 'add-order', component: AddOrderComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
