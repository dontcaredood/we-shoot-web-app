export class OrderStatus{
        deliveryStatus: any;
        orderStatus: any;
        amount: number;
        balanceAmount:string;
        orderAmount:number;
        amountPaid:string;
        orderId:number



      constructor(deliveryStatus: string,
        orderStatus: string,
        amount: number,
        orderAmount:number,
        balanceAmount:string,
        amountPaid:string,
        orderId:number){
            this.amount= amount
            this.balanceAmount= balanceAmount
            this.amountPaid= amountPaid
            this.orderId=orderId
            this.orderStatus= orderStatus
            this.deliveryStatus=deliveryStatus
            this.orderAmount=orderAmount
        }
}