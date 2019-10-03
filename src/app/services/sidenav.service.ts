import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav: MatSidenav;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      // close sidenav on routing
      this.close();
    });
  }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean) {
    return this.sidenav.toggle(isOpen);
  }
}
