export class EnquiryResponseDTO{
    enquiryId:number;
    customerName: string;
    email: string;
    phoneNumber: number;
    functionDate:Date;
    description:string;
    contacted:boolean;


  constructor( customerName: string,
    email: string,
    phoneNumber: number,
    functionDate:Date,
    description:string,
    contacted:boolean){
        this.email= email
        this.customerName= customerName
        this.phoneNumber= phoneNumber
        this.functionDate = functionDate
        this.description = description
        this.contacted= contacted
    }
}