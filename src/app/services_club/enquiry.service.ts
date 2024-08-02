import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnquiryRequest } from '../models/enquiry';
import { Observable } from 'rxjs';
import { EnquiryResponse } from '../models/EnquiryResponse';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private apiUrl = 'http://localhost:8080/we-shoot/enquiry';
  // Replace with your actual API URL
  all_enquiries:string = "/getAllEnquiries"
  active_enquiries:string = "/getActiveEnquiries"
  add_enquiry:string = "/addEnquiry"
  update_enquiry:string="/updateEnquiry"
  constructor(private http: HttpClient) { }

  getEnquiries(): Observable<EnquiryResponse> {
    return this.http.get<EnquiryResponse>(this.apiUrl.concat(this.all_enquiries));
  }

  addEnquiry(enquiry: EnquiryRequest): Observable<number> {
    return this.http.post<number>(this.apiUrl.concat(this.add_enquiry), enquiry);
  }

  updateEnquiry(id:number):Observable<Boolean>{
    return this.http.put<Boolean> (this.apiUrl.concat(this.update_enquiry),id);
  }

}
