import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label:'Inicio',
              routerLink:"inicio",
              icon:'pi pi-fw pi-home',
          },
          {
              label:'Contacto',
              routerLink:"contacto",
              icon:'pi pi-fw pi-envelope',
          },
          {
              label:'SobreNosotros',
              routerLink:"sobre",
              icon:'pi pi pi-question-circle',
          },
      ];
  }
}
