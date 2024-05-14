import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-navsidebar',
  templateUrl: './navsidebar.component.html',
  styleUrls: ['./navsidebar.component.css']
})
export class NavsidebarComponent {

  collapsed = false;
  navData = navbarData;

  toogleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeNavSidebar(): void {
    this.collapsed = false
  }
}
