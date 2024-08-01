import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout_club/home/home.component';
import { ViewOrdersComponent } from './orders_club/view-orders/view-orders.component';
import { AddOrderComponent } from './orders_club/add-order/add-order.component';
import { FormsModule } from '@angular/forms';
import { YesNoPipe } from './yes-no.pipe';
import { ViewOrderDetailsComponent } from './orders_club/view-order-details/view-order-details.component';
import { NavbarComponent } from './layout_club/navbar/navbar.component';
import { UpdateOrderDetailsComponent } from './orders_club/update-order-details/update-order-details.component';
import { LoginComponent } from './login/login.component';
import { NavbarFullComponent } from './layout_club/navbar-full/navbar-full.component';
import { DashboardComponent } from './layout_club/dashboard/dashboard.component';
import { FooterComponent } from './layout_club/footer/footer.component';
import { ViewInvoiceComponent } from './orders_club/view-invoice/view-invoice.component';
import { OrderHistoryComponent } from './orders_club/order-history/order-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackOrderComponent } from './orders_club/track-order/track-order.component';
import { OrderViewComponent } from './orders_club/order-view/order-view.component';
import { GalleryComponent } from './layout_club/gallery/gallery.component';
import { AboutComponent } from './layout_club/about/about.component';

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
    ViewInvoiceComponent,
    OrderHistoryComponent,
    TrackOrderComponent,
    OrderViewComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule // Add HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
