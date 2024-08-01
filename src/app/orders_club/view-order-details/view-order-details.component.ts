import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services_club/order.service';
import { Router } from '@angular/router';
import { Order} from 'src/app/models/order'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  editable: boolean = true;
  eventDateString: string = '';

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router:Router
  ) { }
  
  order: Order | null = null;
  today=  new Date().toISOString().split('T')[0]
  ngOnInit(): void {

    this.orderService.checkPostStatus().subscribe(o=>{
      console.log("check response "+o)
    })

    this.editable=true
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrderById(id).subscribe(order => {
        this.order = order;
        console.log("VIEW ORDER: "+this.order.eventDate)
        console.log(this.formatDate(this.order.eventDate))
        //const formattedDate: any = this.formatDate(this.order.eventDate);
        this.eventDateString = this.formatDate(this.order.eventDate);
      });
    }
  }
  formatDate(dateString: Date): string {
    const date = new Date(dateString);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
  
  edit(){
    console.log("Form is now editable")
    this.editable=!this.editable;
  }

  updateOrderDetails(){
    console.log("UPDATE")
    if (this.order.customerName && this.order.customerPhone && this.order.customerEmail && 
      this.order.orderAmount && this.order.amountPaid && this.order.eventDate && 
      this.order.eventLocation && this.order.orderType) {
    console.log('Order updated:', this.order);
    this.orderService.updateOrder(this.order).subscribe(response => {
      console.log("TODAY "+this.today)
      alert('Order updated successfully!');
      this.router.navigate(['/view-orders']);
      //this.order = { id: '', description: '', amount: '' }; // Reset form
    });
  } else {
    console.log('Form is invalid');
  }
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

  openTrackOrder(){
    this.router.navigate(['track'],{relativeTo:this.route})
  }

}
