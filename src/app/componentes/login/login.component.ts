import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formularioLogin!: FormGroup;

  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router ) {
    this.formularioLogin = fb.group({
      Usuario: ['',[Validators.required, Validators.email]],
      Contraseña:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  //llamamos al metodo para Inicio de Sesion
  login(){
    if(!this.formularioLogin.invalid){
      //hacer si el formulario es valido.
      const{Usuario, Contraseña} = this.formularioLogin.value;
      this.auth.logininFirebase(Usuario, Contraseña);
      alert('Bien ahi! Iniciaste Sesion')
      this.router.navigateByUrl('inicio');
    }
    else{
      alert('El formulario no es correcto: Intente de Nuevo')
    }
  }
  //Cerrar Sesion
  cerrarSesion(){
    this.auth.logOut();
  }
}
