import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user.model'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyBIhIKuMPEpBV6_hRlqvXTqW8nGY53PUA8';
  userToken: string = '';

  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UserModel ) {
    //...usuario es pasar toda la data el usuario como js object,
    // más la propiedad para que fb retorne un token
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    //retorna el observable de http, con un pipe para guardar el token de una vez
    // en el local storage, que es el equivalente a estar logueado
    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] ); //guarda en LS
        return resp;
      })
    ); 

  }

  nuevoUsuario( usuario: UserModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/signupNewUser?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] ); //al crearlo lo guarda en el LS
        return resp;
      })
    );
  }

  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );
    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if ( this.userToken.length < 2 ) {
      return false;
    }

    //obtiene la fecha y hora de expiración
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    // si es válido o no
    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }


  }
}
