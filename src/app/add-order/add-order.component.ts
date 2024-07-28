import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
  order: any = {
    id: '',
    description: '',
    amount: ''
  };

  constructor(private orderService: OrderService, private router: Router) { }
  today=  new Date().toISOString().split('T')[0]

  showToday(){
    console.log(new Date().toLocaleString())
    console.log(this.today)
  }
  
  addOrder(): void {
    if (this.order.customerName && this.order.customerPhone && this.order.customerEmail && 
      this.order.orderAmount && this.order.amountPaid && this.order.eventDate && 
      this.order.eventLocation && this.order.orderType) {
    console.log('Order added:', this.order);
    this.orderService.addOrder(this.order).subscribe(response => {
      console.log("TODAY "+this.today)
      alert('Order added successfully!');
      this.router.navigate(['/']);
      this.order = { id: '', description: '', amount: '' }; // Reset form
    });
  } else {
    console.log('Form is invalid');
  }
    
  }
}
