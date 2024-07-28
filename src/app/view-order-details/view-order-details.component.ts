import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  editable: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }
  
  order: Order | null = null;
  today=  new Date().toISOString().split('T')[0]
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrderById(id).subscribe(order => {
        this.order = order;
        console.log("VIEW ORDER: "+this.order)
      });
    }
  }

  edit(){
    console.log("Form is now editable")
    this.editable=!this.editable;
  }

  updateOrder(){
    console.log("UPDATE")
  }

  downloadPDF() {
    console.log("PDF")
    const data = document.getElementById('invoice');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('invoice.pdf');
      });
    }
  }

}
