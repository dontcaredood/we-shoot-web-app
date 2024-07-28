import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';
import { OrderResponse } from './orderResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //private apiUrl = 'http://localhost:8080/we-shoot'; 
  private apiUrl = "https://weshoot-api-50021575749.development.catalystappsail.in/we-shoot/"
  // Replace with your actual API URL
  orders:string = "/orders"
  add_orders:string = "/add-order"
  view_order:string ="/order"
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
}
