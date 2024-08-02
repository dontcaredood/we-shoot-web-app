import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryRequest } from 'src/app/models/enquiry';
import { EnquiryService } from 'src/app/services_club/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  enquiryForm: FormGroup;
  enquiryRequest:EnquiryRequest

  constructor(private fb: FormBuilder, private enquiryService:EnquiryService,private router: Router) {
    this.enquiryForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      customerPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      customerEmail: ['', [Validators.email]],
      functionDate: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log("INSIED")
    if (this.enquiryForm.valid) {
      console.log(this.enquiryForm.value);
      this.enquiryRequest= this.enquiryForm.value
      console.log(this.enquiryRequest)
      this.enquiryService.addEnquiry(this.enquiryRequest).subscribe(response => {
        console.log(response)
        alert('Enquiry added successfully!');
        this.router.navigate(['']);
      });
     
      // Handle the form submission logic here, like sending the data to a backend server
    } else {
      this.enquiryForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
    }
  }



  get customerName() { return this.enquiryForm.get('customerName'); }
  get customerPhone() { return this.enquiryForm.get('customerPhone'); }
  get customerEmail() { return this.enquiryForm.get('customerEmail'); }
  get functionDate() { return this.enquiryForm.get('functionDate'); }
  get description() { return this.enquiryForm.get('description'); }

}
