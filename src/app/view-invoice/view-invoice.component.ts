import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  orderId:string=''
  order: Order | null = null;
  today=  new Date().toISOString().split('T')[0]

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrderById(id).subscribe(order => {
        this.order = order;
        this.orderId = id;
        console.log("VIEW ORDER: "+this.order)
      });
    }
  }

  downloadPDF() {
    document.getElementById('downloadButton').hidden = true;
    console.log("ahia")
    alert('test')
    const data = document.getElementById('invoice');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('ws_invoice_'+this.orderId+'.pdf');
      });
      alert("Invoice downloaded successfully!")
      this.router.navigate(['/home']);
    }
  }
}
