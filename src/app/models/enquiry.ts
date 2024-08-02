export class EnquiryRequest{
    customerName: string;
    customerEmail: string;
    customerPhone: number;
    functionDate:Date;
    description:string;



  constructor( customerName: string,
    customerEmail: string,
    customerPhone: number,
    functionDate:Date,
    description:string){
        this.customerEmail= customerEmail
        this.customerName= customerName
        this.customerPhone= customerPhone
        this.functionDate = functionDate
        this.description = description
    }
}