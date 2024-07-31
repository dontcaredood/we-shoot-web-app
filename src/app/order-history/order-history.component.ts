import { Component, OnInit, Input } from '@angular/core';
import { OrderHistoryService, OrderHistory } from '../order-history.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  @Input() orderId!: number;
  orderHistories: OrderHistory[] = [];

  constructor(private orderHistoryService: OrderHistoryService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchOrderHistory(id);
  }

  fetchOrderHistory(orderId:string): void {
    if (orderId) {
      this.orderHistoryService.getOrderHistory(orderId).subscribe(
        (data: OrderHistory[]) => {
          this.orderHistories = data;
          console.log(this.orderHistories)
        },
        (error) => {
          console.error('Error fetching order history', error);
        }
      );
    }
  }
}
