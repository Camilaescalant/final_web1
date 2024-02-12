import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /* Sí el usuario esta logueado va a poder ingresar a la ruta */
    if (localStorage.getItem('currentUser')) {
      /* Si en el localStorage tenemos el dato currentUser podremos ingresar */
      return true;
    }
    /* Caso contrario volveremos al login */
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
