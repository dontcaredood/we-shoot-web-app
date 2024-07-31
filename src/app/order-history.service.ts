import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderHistory {
  orderHistoryId: number;
  orderId: number;
  action: string;
  timeStamp: string;
  data: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private apiUrl = 'http://localhost:8080/we-shoot/audit/getOrderHistory';

  constructor(private http: HttpClient) { }

  getOrderHistory(orderId: string): Observable<OrderHistory[]> {
    return this.http.get<OrderHistory[]>(`${this.apiUrl}/${orderId}`);
  }
}
