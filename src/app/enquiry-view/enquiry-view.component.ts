import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services_club/enquiry.service';
import { EnquiryResponseDTO } from 'src/app/models/EnquiryResponseDTO';
import { identity } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-view',
  templateUrl: './enquiry-view.component.html',
  styleUrls: ['./enquiry-view.component.css']
})
export class EnquiryViewComponent implements OnInit {
enquiryResponse:EnquiryResponseDTO[]
contacted_enquiryResponse:EnquiryResponseDTO[]
notContacted_enquiryResponse:EnquiryResponseDTO[]
  constructor(private enquiryService:EnquiryService, private router:Router) { }

  ngOnInit(): void {
     this.enquiryService.getEnquiries().subscribe(response => {
      this.enquiryResponse = response.enquiryList
      console.log("Data "+response)
      this.contacted_enquiryResponse = this.filterCompletedEnquiries(this.enquiryResponse)
      this.notContacted_enquiryResponse = this.filterPendingEnquiries(this.enquiryResponse)
      console.log(this.contacted_enquiryResponse)
    });
  }

  filterCompletedEnquiries(enquiries:EnquiryResponseDTO[]){
    return enquiries.filter(enquiry=> enquiry.contacted==true)
  }
  
  filterPendingEnquiries(enquiries:EnquiryResponseDTO[]){
    return enquiries.filter(enquiry=> enquiry.contacted==false)
  }
  updateEnquiry(id:number){
    this.enquiryService.updateEnquiry(id).subscribe(response => {
      console.log(response)
      alert('Enquiry updated successfully!');
      this.router.navigate(['/view-enquiries']).then(()=>window.location.reload());
      //this.order = { id: '', description: '', amount: '' }; // Reset form
    });
    console.log("updated"+ id)
  }
}
