import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public logueado : boolean = false;
    public email : string='';

    constructor(private auth: AuthService) { }

  items!: MenuItem[];

  ngOnInit(): void{
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
      this.auth.user.subscribe(user=>{
        if(user){
          this.logueado = true;
          this.email = user.email;
        }
        else{
          this.logueado = false;
        }
      })
  }
}
