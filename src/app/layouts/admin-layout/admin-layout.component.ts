import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from 'src/app/services/component-service/sidenav.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild('sidebar', { static: true }) public sidebar: MatSidenav;
  
  constructor(private sidenavService: SideNavService) { }
  
  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidebar);
  }

}
