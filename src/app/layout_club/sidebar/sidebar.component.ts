import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }
}
