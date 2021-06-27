import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private log: AuthService, 
    private router: Router, 
    private toastr: ToastrService){}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    if (this.log.estaAutenticado()){
      return true;
    }else{
      localStorage.removeItem('token');
      this.toastr.error("Por favor inicie sesión para tener acceso a esta página");
      this.router.navigate(["login"]);
      return false;
    }
  }
}
