import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services_club/auth.service';
import { SidebarFullComponent } from '../sidebar-full/sidebar-full.component';
@Component({
  selector: 'app-navbar-full',
  templateUrl: './navbar-full.component.html',
  styleUrls: ['./navbar-full.component.css']
})
export class NavbarFullComponent implements OnInit {
  @ViewChild(SidebarFullComponent) sidebar: SidebarFullComponent;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logout();
  }

  toggleSidebar(): void {
    this.sidebar.toggleSidebar();
  }
}
