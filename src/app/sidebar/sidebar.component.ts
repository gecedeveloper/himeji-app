import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  @ViewChild('sidenav')
  sidenav: MdSidenav

  constructor() { }

  ngAfterViewInit() {

  }

  openSidebar(){
    this.sidenav.open();
  }
}
