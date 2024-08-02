import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services_club/auth.service';

@Component({
  selector: 'app-sidebar-full',
  templateUrl: './sidebar-full.component.html',
  styleUrls: ['./sidebar-full.component.css']
})
export class SidebarFullComponent implements OnInit {
  isActive: boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }
  logout(): void {
    this.authService.logout();
  }
}
