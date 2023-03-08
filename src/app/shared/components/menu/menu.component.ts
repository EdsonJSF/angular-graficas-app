import { Component } from '@angular/core';

interface MenuItem {
  path: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menus: MenuItem[] = [
    { path: '/graficas/barra', name: 'Barras' },
    { path: '/graficas/barra-doble', name: 'Barras Doble' },
    { path: '/graficas/dona', name: 'Dona' },
    { path: '/graficas/dona-http', name: 'Dona Http' },
  ];
}
