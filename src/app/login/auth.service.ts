import { Injectable } from '@angular/core';
//Firebase Auth para trabajar con autentificacion.
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!:Observable<any>;

  constructor(private auth:AngularFireAuth) {
    this.auth.authState.subscribe((user)=>{
      console.log(user?.email);
    })
   }

   logininFirebase(usuario:string, pass:string){
    this.auth.signInWithEmailAndPassword(usuario,pass);
   }
   logOut(){
     this.auth.signOut();
   }

}
