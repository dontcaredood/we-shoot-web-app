export class Order {
    orderId:number;
    orderAmount: number;
    amountPaid:number;
    eventDate: Date;
    eventLocation:string;
    customerName:string;
    customerPhone:number;
    customerEmail:string;
    orderType:string;
    orderDescription:string;
    remainingBalance:number;
    closed:boolean;
    delivered:boolean;
  
    constructor(orderId: number,
        orderAmount: number,
        amountPaid:number,
        eventDate: Date,
        eventLocation:string,
        customerName:string,
        customerPhone:number,
        customerEmail:string,
        orderType:string,
        orderDescription:string,
        remainingBalance:number,
        closed:boolean,
        delivered:boolean) {
        this.orderId = orderId;
      this.orderAmount = orderAmount;
      this.amountPaid = amountPaid;
      this.eventDate= eventDate;
      this.eventLocation=eventLocation;
      this.customerEmail=customerEmail;
      this.customerName=customerName;
      this.customerPhone=customerPhone;
      this.orderType=orderType;
      this.orderDescription=orderDescription;
      this.remainingBalance = remainingBalance;
      this.closed= closed;
      this.delivered=delivered;

    }
  }
  