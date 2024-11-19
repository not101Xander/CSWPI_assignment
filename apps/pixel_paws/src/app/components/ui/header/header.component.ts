import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'Users',
        routerLink: '/user-list',
      },
      {
        label: 'About',
        routerLink: '/about',
      },
    ];
  }
}
