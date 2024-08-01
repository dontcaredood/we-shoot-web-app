import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services_club/auth.service';
@Component({
  selector: 'app-navbar-full',
  templateUrl: './navbar-full.component.html',
  styleUrls: ['./navbar-full.component.css']
})
export class NavbarFullComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logout();
  }
}
