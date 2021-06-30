/** Authors: 
 * Susana Cob García
 * Alejandro Tapia Álvarez
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ProyectoFinal';

  isLoggedIn: boolean;

  constructor(public auth: AuthService){}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("logged") == 'true';
    this.auth.isLoggedIn().subscribe(
      (logged) => {
        localStorage.setItem("logged", logged.toString());
        this.isLoggedIn = localStorage.getItem("logged") == 'true';
        console.log(this.isLoggedIn)
      });
  }

}
