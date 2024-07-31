import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[] = [];
  ongoingOrders: Order[] = [];
  completedOrders: Order[] = [];
  orderCount: number = 0;
  expandedOrderId: number | null = 0;

  constructor(private orderService: OrderService, private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(response => {
      this.orders = response.ordersList;
      this.orderCount = response.noOfElements;
      console.log("Data "+response)
      this.ongoingOrders = this.filterOngoingOrders(this.orders)
      this.completedOrders = this.filterCompletedOrders(this.orders)
      console.log(this.completedOrders)
    });
  }
  filterCompletedOrders(orders:Order[]){
    console.log("Completed Orders")
    //console.log(orders[1].closed)
    return orders.filter(order=> order.closed==true && order.delivered==true)
  }
  
  filterOngoingOrders(orders:Order[]){
    console.log("Completed Orders")
    //console.log(orders[1].closed)
    return orders.filter(order=> order.closed==false || order.delivered==false)
  }
  viewOrder(id:number){
    console.log("ID: "+id)
    let url: string = "/order/" + id
    console.log(url)
    this.router.navigateByUrl(url);
    //this.router.navigate(['order'], {relativeTo:this.route});
  }
  printInvoice(id:number){
    console.log("ID: "+id)
    let url: string = "/invoice/" + id
    console.log(url)
    this.router.navigateByUrl(url);
    //this.router.navigate(['order'], {relativeTo:this.route});
  }
  orderHistory(id:number){
    console.log("ID: "+id)
    let url: string = "/orderHistory/" + id
    console.log(url)
    this.router.navigateByUrl(url);
    //this.router.navigate(['order'], {relativeTo:this.route});
  }

  updateOrder(id:number){
    console.log("ID: "+id)
    let url: string = "/order/" + id
    console.log(url)
    this.router.navigateByUrl(url);
    //this.router.navigate(['order'], {relativeTo:this.route});
  }

  toggleOrder(orderId: number): void {
    this.expandedOrderId = this.expandedOrderId === orderId ? null : orderId;
  }

  
}
