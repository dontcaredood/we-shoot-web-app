import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services_club/order.service';
import { OrderStatus } from 'src/app/models/orderStatus';
@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})

export class TrackOrderComponent implements OnInit {

  constructor(private orderService: OrderService,private route:Router,private router:ActivatedRoute
    
  ) { }
  onSubmit() {
    console.log('Order submitted:', this.orderStatus);
    this.orderService.insertTrackOrderById(this.orderStatus).subscribe(response => {
      alert('Order updated successfully!');
      this.route.navigate(['/view-orders']);
    });
    // Add your form submission logic here
  }
///orderStatus :OrderStatus | null = null;

orderStatus = {
  deliveryStatus: "",
  orderStatus: "",
  amount: 0,
  orderAmount:0,
  balanceAmount:"",
  amountPaid:"",
  orderId:0
};
  today=  new Date().toISOString().split('T')[0]
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getTrackOrderById(id).subscribe(order => {
        this.orderStatus = order;
      });
    }
    console.log(this.orderStatus)
  }


}
