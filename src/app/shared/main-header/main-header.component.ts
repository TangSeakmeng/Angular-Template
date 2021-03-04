import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {SideNavService} from '../../services/component-service/sidenav.service'
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  ismobile = false;
  toggleSidebar: any;
  toggleActive: boolean = false;
  
  constructor(
    public localStorages: LocalStorage,
    private sideNavService: SideNavService
  ) { }

  ngOnInit(): void {

  }

  toggleChartbar() {
    this.sideNavService.toggle();
  }

  togglesidebar() {
    let body = document.getElementsByClassName("page-wrapper")[0];
    body.classList.toggle("toggled-sidebar");
    this.toggleSidebar = !this.toggleSidebar;
    this.localStorages
      .setItem("toggleSidebar", this.toggleSidebar)
      .subscribe(() => { });
  }

}
