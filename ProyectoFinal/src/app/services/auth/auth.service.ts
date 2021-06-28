import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user.model'
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyBIhIKuMPEpBV6_hRlqvXTqW8nGY53PUA8';
  userToken: string = '';
  private logger = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.logger.next(false);
    this.leerToken();
  }

  logout() {
    this.logger.next(false);
    localStorage.removeItem('token');
  }

  login(usuario: UserModel) {
    //...usuario es pasar toda la data el usuario como js object,
    // más la propiedad para que fb retorne un token
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    //retorna el observable de http, con un pipe para guardar el token de una vez
    // en el local storage, que es el equivalente a estar logueado

    return this.http.post(
      `${this.url}/verifyPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        this.logger.next(true);
        this.guardarToken(resp['idToken']); //guarda en LS
        this.guardarNombre(resp["displayName"]);
        return resp;
      })
    );

  }

  private guardarNombre(nombre: string) {
    this.userToken = nombre;
    localStorage.setItem('nombre', nombre);
  }

  nuevoUsuario(usuario: UserModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}/signupNewUser?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']); //al crearlo lo guarda en el LS
        return resp;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      localStorage.setItem("logged", "false");
      return false;
    }

    //obtiene la fecha y hora de expiración
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    // si es válido o no
    if (expiraDate > new Date()) {
      localStorage.setItem("logged", "true");
      return true;
    } else {
      localStorage.setItem("logged", "false");
      return false;
    }
  }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }
}
