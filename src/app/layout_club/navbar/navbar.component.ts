import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services_club/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebar.toggleSidebar();
  }
}
