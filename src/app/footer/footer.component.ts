import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log("EHHIHI")
    this.username = this.authService.getUsername(); 
    console.log(this.username)// Adjust this method to how you store/retrieve the username
  }
}
