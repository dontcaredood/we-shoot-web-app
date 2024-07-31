import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './models/order';
import { OrderResponse } from './models/orderResponse';
import { OrderStatus } from './models/orderStatus';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/we-shoot/order'; 
  //private apiUrl = "https://weshoot-api-50021575749.development.catalystappsail.in/we-shoot"
  // Replace with your actual API URL
  orders:string = "/getOrders"
  add_orders:string = "/addOrder"
  view_order:string ="/getOrder"
  update_order:string="/updateOrder"
  track_order:string="/trackOrder"
  insert_track_order:string="/trackOrder"
  constructor(private http: HttpClient) { }

  getOrders(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(this.apiUrl.concat(this.orders));
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl.concat(this.add_orders), order);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl.concat(this.view_order)}/${id}`);
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.apiUrl.concat(this.update_order), order);
  }
  getTrackOrderById(id: string): Observable<OrderStatus> {
    return this.http.get<OrderStatus>(`${this.apiUrl.concat(this.track_order)}/${id}`);
  }

  insertTrackOrderById(orderStatus: OrderStatus): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.apiUrl.concat(this.track_order),orderStatus);
  }
}
