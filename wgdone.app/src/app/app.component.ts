import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav, { static: true }) public sidenav: MatSidenav;
  title = 'wgdone';

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
