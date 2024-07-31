import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
viewOrderEnabled=true
trackOrderEnabled=false

  constructor() { }

  ngOnInit(): void {
  }
  enableTO() {
    this.trackOrderEnabled= true;
    this.viewOrderEnabled=false  
    console.log(this.trackOrderEnabled+" "+this.viewOrderEnabled)  
    }
  enableVO() {
  this.trackOrderEnabled= false;
  this.viewOrderEnabled=true  
  console.log(this.trackOrderEnabled+" "+this.viewOrderEnabled)
  }
}
